import express from "express";
import catchAsyncError from "../errors/catchAsyncError.js"
import { register, login, isLogin, logout } from "../controllers/authentication.controller.js"
import { upload } from "../middlewares/uploadImage.middleware.js"
import { authRole } from "../middlewares/authentication.middleware.js"
import { authJwtTokenVerify } from "../middlewares/authentication.middleware.js";
import { ERoles } from "../types/global.js";
const router = express.Router();

// upload.single("imgSRC"),
router.post("/register", catchAsyncError(register));
router.post("/login", catchAsyncError(login));
router.post("/isLogin", catchAsyncError(isLogin));
router.post("/logout/:userId", catchAsyncError(logout));

export default router;
