const mongoose = require('mongoose');
const bycrypt = require('bycrypt')
const userSchema = new mongoose.Schema({
    firstName:{
        type:"string",
        required: [true, "First Name is required" ],
    },
    lastName:{
        type:"String",
        required: [true, "Last Name is required"]   
    },
    avtar:{
        type: "String"
    },
    email:{
        type:"String",
        required: [true, "Last Name is required"],
        validate: {validator: function name(params){
            return String(params).toLowerCase().match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        },
        message: (props)=> `Email (${props.value}) is invalide`
        }
    },
    password:{
        type:"String",
        required: [true, "Last Name is required"]   
    },
    passwordChangedAt:{
        type: Date
    },
    verified:{
        type: Boolean,
        default: false,
        
    },
    otp:{
        type: Number
    },
    otp_expiry_time:{
        type: Date
    }

    
});
userSchema.pre("save", async function(next){
    this.otp = await bycrypt
})
userSchema.methods.correctPassword = async function (Inputpassword, userPassword){
    return await bycrypt.compare(Inputpassword, userPassword)

}
const Users = new mongoose.model("User", userSchema);
module.exports = Users;