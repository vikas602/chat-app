const express = require("express");
const router = express.Router()

const authController = require("../controllers/auth");

router.post("/login", authController.login);

router.post("/register", authController.register);
router.post("/send-otp", authController.sendOTP);
router.post("/verify-otp", authController.verifyOTP);
router.post("/forgot-password", authController.forgetPassword);
router.post("/reset-password", authController.resetPassword);
module.exports =router;