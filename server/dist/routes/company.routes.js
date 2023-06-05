import express from "express";
import catchAsyncError from "../errors/catchAsyncError.js";
import { testRoute } from "../controllers/company.controller.js";
import { authRole } from "../middlewares/authentication.middleware.js";
import { ERoles } from "../types/global.js";
const router = express.Router();
router.get("/test", authRole(ERoles.member), catchAsyncError(testRoute));
export default router;
//# sourceMappingURL=company.routes.js.map