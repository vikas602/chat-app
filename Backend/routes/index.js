const router = require("express").Router();


const authRoute = require("../routes/auth");
const userRoute =require("./user");

router.use("/auth", authRoute);
router.use("/user", userRoute);
