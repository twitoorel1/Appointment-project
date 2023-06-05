import jwt from "jsonwebtoken";
const jwtConfig = {
    ac_secret: `${process.env.JWT_ACCESS_TOKEN_SECRET}`,
    rf_secret: `${process.env.JWT_REFRESH_TOKEN_SECRET}`,
    ac_expired_millisecond: process.env.JWT_ACCESS_TOKEN_EXPIRED_MILLISECONDS, // 1 hour
};
export const createAccessToken = (userId, role) => {
    try {
        const token = jwt.sign({ userId, role }, jwtConfig.ac_secret);
        return token;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};
export const createRefreshToken = (userId, role) => {
    try {
        const token = jwt.sign({ userId, role }, jwtConfig.rf_secret);
        return token;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};
export const verifyAccessToken = (token) => {
    try {
        const decoded = jwt.verify(token, jwtConfig.ac_secret);
        return decoded;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};
//# sourceMappingURL=jwt.services.js.map