const jwt = require('jsonwebtoken');

const User = require('../models/user');
const filterObj = require('../utils/filterObj');
const otpGenerator = require('otp-generator');

const signToken=(userId)=> jwt.sign({userId}, process.env.JWT_SECRET_KEY);

//Signup controller
exports.register = async(req, res, next)=>{
    const {firstName, lastName, email, password, gender}= req.body;
    const filteredBody = filterObj(req.body, "firstName", "lastName", "email", "password", "gender");
    const user = User.findOne({email:email});''
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
        res.status(400).json({
            status: "error",
            message: "Sorry your email is not registered"
        });
    }


    //Generate Reset token
    const resetToken = user.createPasswordToken();
    const resetURL = `https://chats.com/reset-password/code=${resetToken}`;
    try{
        res.status(200).json({
            status: "success",
            message: "Rest password link sent to email"
        });
    }
    catch(err){
        user.passwordRestToken = undefined;
        user.passwordRestExpires = undefined;
        await user.save({validateBeforeSave: false});
        res.status(500).json({
            status: error,
            message: "There was an error sending email"
        });
    }
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
        })
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
        message:"Logged in sucessfully",
        token
    });
     
}

    

}