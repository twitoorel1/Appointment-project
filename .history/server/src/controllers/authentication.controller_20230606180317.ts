import { NextFunction, Request, Response } from "express";
import User from "../models/user.model.js";
import { BadRequestError, NotFoundError, ServerError, UnauthorizeError } from "../errors/Errors.js";
import { createAccessToken, createRefreshToken, verifyAccessToken } from "../services/jwt.services.js";
import { JwtPayload } from "jsonwebtoken";
import { SELECTED_USER_FIELDS } from "../config/constants/user.constants.js";
import { registerRequestSchema, loginRequestSchema } from "../validators/authRequests.schema.js";
import errorHandler from "../errors/errorHandlerYup.js";


export async function register(req: Request, res: Response, next: NextFunction) {
    try {
        await registerRequestSchema.validate(req.body, { abortEarly: false })
        const { firstName, lastName, email, username, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return next(new BadRequestError("Passwords do not match"));
        }

        // if (!req.file) return next(new UnauthorizeError('Please upload an image')) // Stop For Dev Mode
        // const { path: image } = req.file

        const user = await User.create({ firstName, lastName, email, username, password });
        res.status(201).send({ error: false, data: user });
    } catch (error: any) {
        if (typeof "MongoError") {
            return next(new ServerError(error.message));
        }
        if (error.name === "ValidationError") {
            return errorHandler(error, req, res, next);
        }
        console.log(error.message)
    }
}

export async function login(req: Request, res: Response, next: NextFunction) {
    try {
        await loginRequestSchema.validate(req.body, { abortEarly: false })
        const { username, password } = req.body;
        if (!username || !password) return next(new BadRequestError('Please login with email and password'));

        const user = await User.findOne({ email });
        if (!user) return next(new NotFoundError('User not found'));

        const isValidPassword = await user.comparePassword(password);
        if (!isValidPassword) return next(new UnauthorizeError("Password or Email is incorrect"));

        const accessToken = createAccessToken(user.id, user.role);
        const refreshToken = createRefreshToken(user.id, user.role);

        user.setJwtTokens(accessToken, refreshToken);
        res.status(200).send({ error: false, data: user, token: accessToken });
    } catch (error: any) {
        if (typeof "MongoError") {
            return next(new ServerError(error.message));
        }
        if (error.name === "ValidationError") {
            return errorHandler(error, req, res, next);
        }
        console.log(error.message)
    }
}


export async function isLogin(req: Request, res: Response, next: NextFunction) {
    const { token } = req.body;
    if (!token) return next(new BadRequestError("Token is required"));

    const { userId } = verifyAccessToken(token) as JwtPayload;
    const user = await User.findById(userId).select(SELECTED_USER_FIELDS);

    res.status(200).send({ isAuthenticated: true, user: user });
}


export async function logout2(req: Request, res: Response, next: NextFunction) {
    const { token } = req.body;
    // const { userId } = req.params;
    const { userId } = req.user
    if (!token && !userId) return next(new BadRequestError());

    try {
        const user = await User.findOne({ _id: userId });
        user?.deleteAcToken();
        res.status(200).end();
    } catch (error: any) {
        next(new ServerError(String(error.message)));
    }
}


export async function logout(req: Request, res: Response, next: NextFunction) {
    try {
        const { token } = req.body;
        const { userId } = req.params;
        if (!token && !userId) return next(new BadRequestError());
        const user = await User.findOne({ _id: userId });
        user?.deleteAcToken();
        res.status(200).end();

    } catch (error: any) {
        console.log(error.message)
    }
}