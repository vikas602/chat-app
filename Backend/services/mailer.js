const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");

dotenv.config({path: "../config.env" });

// sgMail.setApiKey(process.env.SG_KEY);

const sendMail = async({
    recipient,
    sender,
    subject,
    content,
    attachement

})=>{
    try{
        const from= sender || "vikassharma32275@gmail.com";
        const message= {
            to: recipient,
            from: from,
            subject,
            html: content,
            // text: "",
            attachement

        }
        return sgMail.send(message);
    }
    catch(err){
        console.log(err)
    }
}

exports.sendEmail = async(args)=>{
    if(process.env.NODE_ENV==="development"){
        return new Promise.resolve();
    }
    else{
        return sendMail(args)
    }

}