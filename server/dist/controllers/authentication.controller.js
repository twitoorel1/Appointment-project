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
import { BadRequestError, NotFoundError, ServerError, UnauthorizeError } from "../errors/Errors.js";
import { createAccessToken, createRefreshToken, verifyAccessToken } from "../services/jwt.services.js";
import { SELECTED_USER_FIELDS } from "../config/constants/user.constants.js";
import { registerRequestSchema, loginRequestSchema } from "../validators/authRequests.schema.js";
import errorHandler from "../errors/errorHandlerYup.js";
export function register(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield registerRequestSchema.validate(req.body, { abortEarly: false });
            const { firstName, lastName, email, username, password, confirmPassword } = req.body;
            if (password !== confirmPassword) {
                return next(new BadRequestError("סיסמה לא זהה"));
            }
            // if (!req.file) return next(new UnauthorizeError('Please upload an image')) // Stop For Dev Mode
            // const { path: image } = req.file
            const user = yield User.create({ firstName, lastName, email, username, password });
            res.status(201).send({ error: false, data: user });
        }
        catch (error) {
            if (typeof "MongoError") {
                return next(new ServerError(error.message));
            }
            if (error.name === "ValidationError") {
                return errorHandler(error, req, res, next);
            }
            console.log(error.message);
        }
    });
}
export function login(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield loginRequestSchema.validate(req.body, { abortEarly: false });
            const { username, password } = req.body;
            if (!username || !password)
                return next(new BadRequestError('היכנס עם שם משתמש וסיסמה'));
            const user = yield User.findOne({ username });
            if (!user)
                return next(new NotFoundError('User not found'));
            const isValidPassword = yield user.comparePassword(password);
            if (!isValidPassword)
                return next(new UnauthorizeError("שם משתמש או סיסמה שגויים"));
            const accessToken = createAccessToken(user.id, user.role);
            const refreshToken = createRefreshToken(user.id, user.role);
            user.setJwtTokens(accessToken, refreshToken);
            res.status(200).send({ error: false, data: user, token: accessToken });
        }
        catch (error) {
            if (typeof "MongoError") {
                return next(new ServerError(error.message));
            }
            if (error.name === "ValidationError") {
                return errorHandler(error, req, res, next);
            }
            console.log(error.message);
        }
    });
}
export function isLogin(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { token } = req.body;
        if (!token)
            return next(new BadRequestError("Token is required"));
        const { userId } = verifyAccessToken(token);
        const user = yield User.findById(userId).select(SELECTED_USER_FIELDS);
        res.status(200).send({ isAuthenticated: true, user: user });
    });
}
export function logout2(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { token } = req.body;
        // const { userId } = req.params;
        const { userId } = req.user;
        if (!token && !userId)
            return next(new BadRequestError());
        try {
            const user = yield User.findOne({ _id: userId });
            user === null || user === void 0 ? void 0 : user.deleteAcToken();
            res.status(200).end();
        }
        catch (error) {
            next(new ServerError(String(error.message)));
        }
    });
}
export function logout(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { token } = req.body;
            const { userId } = req.params;
            if (!token && !userId)
                return next(new BadRequestError());
            const user = yield User.findOne({ _id: userId });
            user === null || user === void 0 ? void 0 : user.deleteAcToken();
            res.status(200).end();
        }
        catch (error) {
            console.log(error.message);
        }
    });
}
//# sourceMappingURL=authentication.controller.js.map