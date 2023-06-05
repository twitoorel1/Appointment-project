var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from "../models/user.model.js";
import { REMOVE_USER_FIELDS } from "../config/constants/user.constants.js";
import { ForbiddenError, NotFoundError } from "../errors/Errors.js";
/* Routes For All User */
export const findById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.user.userId === req.params.id || req.user.role === "admin") {
        const user = yield User.findById(req.params.id).select(REMOVE_USER_FIELDS);
        if (!user)
            return next(new NotFoundError("User not found"));
        res.status(200).json(user);
    }
    else {
        return next(new ForbiddenError('You do not have access'));
    }
});
export const deleteUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.user.userId === req.params.id || req.user.role === "admin") {
        const user = yield User.findByIdAndDelete(req.params.id);
        if (!user)
            return next(new NotFoundError("User not found"));
        res.status(200).send("User deleted successfully");
    }
    else {
        return next(new ForbiddenError('You do not have access'));
    }
});
/* Routes For Only Admin */
export const createNewUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return res.redirect(307, '/auth/register');
});
export const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User.find().select(REMOVE_USER_FIELDS);
    if (!users)
        return next(new NotFoundError("Users not found"));
    res.status(200).json(users);
});
//# sourceMappingURL=user.controller.js.map