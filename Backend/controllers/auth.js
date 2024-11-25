const jwt = require('jsonwebtoken');

const User = require('../models/user');
const filterObj = require('../utils/filterObj');
const otpGenerator = require('otp-generator');
const promisify = require("util")
const signToken=(userId)=> jwt.sign({userId}, process.env.JWT_SECRET_KEY);
const mailService = require("../services/mailer");
const crypto = require("crypto");

//Signup controller
exports.register = async(req, res, next)=>{
    const {firstName, lastName, email, password, gender}= req.body;
    const filteredBody = filterObj(req.body, "firstName", "lastName", "email", "password", "gender");
    const user = User.findOne({email:email});
    if(user && user.verified){

        res.status(400).json({
            status: "error",
            message: " Both email and password is required"
        })

    }
    else if(user){
      const  updatedUser =await User.findOneAndUpdate({email: email},filteredBody,{new:true, validateModifiedOnly: true});
      req.userId = user._id;
      next();
    }
    else{
        const new_user = await User.create(filteredBody);
        // gerneate otp for validation 
        req.userId = new_user._id;
        next();
    }

}

// Send otp controller

exports.sendOTP = async (req, res, next)=>{
    const {userId}= req.body;
    const new_otp = otpGenerator.generate(4, { upperCaseAlphabets: false, specialChars: false });
    const otp_expiry_time= Date.now() + 10*60*1000;
    await User.findByIdAndUpdate(userId,{
        otp:new_otp,
        otp_expiry_time,
    });
    mailService.sendEmail({
        from: "vikassharm32275@gmail.com",
        to: "vikassharma32275@gmail.com",
        subject: "OTP for chat login",
        text: `Your OTP is ${otp}. This is valid for 10 min`
    }
    )
    res.status(200).json({
        status: "Successfull",
        message: "OTP sent successfully"
    })
    
    

}
// verify OTP

exports.verifyOTP = async(req, res, next)=>{
    const{email, opt} = req.body;
    const user = await User.findOne({email, otp_expiry_time: {$gt: Date.now()}});
    if(!user){
        res.status(200).json({
            satus: "error",
            message: "Email is invalid or OTP is expired"
        })
    }
    if(!await user.correctOTP(otp, user.otp)){
        res.status(400).json({
            status: "error",
            message: "OTP is not valid"
        })
    }
    user.verified = true;
    user.otp = undefined;

    await user.save({new:true, validateModifiedOnly: true});
    const token = signToken(user._id);
    res.status(200).json({
        status: "Sucessfull",
        message:"OTP verified",
        token
    });
     

}

// login controller

exports.login = async (req, res, next)=>{
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400).json({
            status: "error",
            message: " Both email and password is required"
        })
    }
    const user = await User.findOne({email: email}).select("+password");
    if(!user && !(await user.correctPassowrd(password, user.password))){
        res.status(400).json({
            status: "error",
            message: "Sorry email or password is incorrect"
        })
    }
    const token = signToken(user._id);
    res.status(200).json({
        status: "Sucessfull",
        message:"Logged in sucessfully",
        token
    });

// forget Password
exports.forgetPassword = async(req, res, next)=>{
    const{email} = req.body;
    const user = User.findOne({email: email});
    if(!user){
        return res.status(400).json({
            status: "error",
            message: "Sorry your email is not registered"
        });
        
    }
    


    //Generate Reset token
    // const resetToken = user.createPasswordToken();
    // const resetURL = `https://chats.com/reset-password/code=${resetToken}`;
    try{
        return res.status(200).json({
            status: "success",
            message: "Rest password link sent to email"
        });
    }
    catch(err){
        user.passwordRestToken = undefined;
        user.passwordRestExpires = undefined;
        await user.save({validateBeforeSave: false});
        return res.status(500).json({
            status: error,
            message: "There was an error sending email"
        });
    }
}

exports.protect= async(req, res, next)=>{ 
    let token;
    if(req.headers.authrization && req.headers.authrization.startsWith("Bearrer")){
        token = req.headers.authrization.split(" ")[1];

    }
    else if(req.cookie.jwt){
        token = req.cookie.jwt;

    }
    else{
        req.status(400).json({
            status: "error",
            message: "You are not logged In"
        })
        return;
    }
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET_KEY);
    const this_user  = await User.findById(decoded.userId);

    if(!this_user){
        res.status(400).json({
            status: "error",
            message: "User dosen't exist"
        })
    }

    //check the user changed passowrd
    if(this_user.changedPasswordAfter(decoded.iat)){
        res.status(400).json({
            status: "error",
            message: "User might changed the password. Please login again"
        })
    }
   req.user = this_user;
   next(); 


}

exports.resetPassword = async (req, res, next)=>{
    const hashedToken = crypto.createHash("sha256").update(req.params.token).digest('hex');
    const user = await User.findOne({
        passwordRestToken: hashedToken,
        passwordRestExpires: {$gt: Date.now()}
    })
    if(!user){
        res.status(400).json({
            status: "error",
            message: "Token is expired or invalid"
        });
        return;
    }
    // update user
    user.password= req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    user.passwordRestExpires= undefined;
    user.passwordRestToken = undefined;

    await user.save();

    const token = signToken(user._id);
    res.status(200).json({
        status: "Sucessfull",
        message:"Password Reseted Sucessfully",
        token
    });
     
}

    

}