import express from "express";
import catchAsyncError from "../errors/catchAsyncError.js";
import { findById, deleteUserById, getAllUsers } from "../controllers/user.controller.js";
import { authRole } from "../middlewares/authentication.middleware.js";
import { ERoles } from "../types/global.js";
const router = express.Router();
// Routes For All User
router.get("/find/:id", catchAsyncError(findById));
router.delete("/delete/:id", catchAsyncError(deleteUserById));
/* Routes For Only Admin */
router.get("/newUser", authRole(ERoles.admin), catchAsyncError(getAllUsers));
router.get("/all", authRole(ERoles.admin), catchAsyncError(getAllUsers));
export default router;
//# sourceMappingURL=user.routes.js.map