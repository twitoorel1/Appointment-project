var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ForbiddenError, UnauthorizeError } from "../errors/Errors.js";
import { verifyAccessToken } from "../services/jwt.services.js";
export const authJwtTokenVerify = (req, res, next) => {
    try {
        const token = Array.isArray(req.headers["ac-token"]) ? req.headers["ac-token"][0] : req.headers["ac-token"];
        if (!token)
            throw new UnauthorizeError();
        const decodedToken = verifyAccessToken(token);
        if (!decodedToken)
            return next(new UnauthorizeError('Error decodedToken'));
        req.user = decodedToken;
        next();
    }
    catch (error) {
        next(new UnauthorizeError(error.message));
    }
};
export const authRole = (role) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        if (req.user.role === "admin") {
            return next();
        }
        if (req.user.role !== role) {
            return next(new ForbiddenError('You do not have access to this route'));
        }
        else {
            next();
        }
    });
};
//# sourceMappingURL=authentication.middleware.js.map