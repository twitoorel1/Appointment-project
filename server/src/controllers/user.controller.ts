import { Request, Response, NextFunction } from "express";
import User from "../models/user.model.js";
import { REMOVE_USER_FIELDS } from "../config/constants/user.constants.js"
import { ForbiddenError, NotFoundError } from "../errors/Errors.js";


/* Routes For All User */
export const findById = async (req: Request, res: Response, next: NextFunction) => {
    if (req.user.userId === req.params.id || req.user.role === "admin") {
        const user = await User.findById(req.params.id).select(REMOVE_USER_FIELDS);
        if (!user) return next(new NotFoundError("User not found"));
        res.status(200).json(user)
    } else {
        return next(new ForbiddenError('You do not have access'))
    }
}

export const deleteUserById = async (req: Request, res: Response, next: NextFunction) => {
    if (req.user.userId === req.params.id || req.user.role === "admin") {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return next(new NotFoundError("User not found"));
        res.status(200).send("User deleted successfully");
    } else {
        return next(new ForbiddenError('You do not have access'))
    }
}



/* Routes For Only Admin */
export const createNewUser = async (req: Request, res: Response, next: NextFunction) => {
    return res.redirect(307, '/auth/register')
}

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    const users = await User.find().select(REMOVE_USER_FIELDS);
    if (!users) return next(new NotFoundError("Users not found"));
    res.status(200).json(users)
}