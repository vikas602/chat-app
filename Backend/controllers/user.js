const User = require("../models/user");
const filterObj = require("../utils/filterObj");

exports.updateMe = async (req, res, next)=>{
    const {user} = req;
    const filteredBody = filterObj(req.body, "firstName", "lastName", "about", "avatar" )

    const updated_user= await User.findByIdAndUpdate(uesr._id,filteredBody, {new:ture, });
    res.status(200).json({
        status: "successfull",
        data: filteredBody,
        message: "Profile Updated"
    })
}