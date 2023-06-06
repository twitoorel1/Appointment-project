var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { emailRegex } from "../config/constants/regex.constant.js";
import { ERoles } from "../types/global.js";
// import path from "path";
const userSchema = new Schema({
    email: {
        type: String,
        required: false,
        unique: true,
        match: [emailRegex, "Invalid email address"],
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: false,
    },
    phoneNumber: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        default: ERoles.member,
    },
    imgSRC: {
        type: String,
        required: false,
        // default: path.join(process.cwd() + "/public/default-profile.png"),
    },
    jwt_ac_token: {
        type: String,
        required: false,
    },
    jwt_rf_token: {
        type: String,
        required: false,
    },
}, { timestamps: true, });
userSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.isModified("password"))
            return next();
        this.password = yield bcrypt.hash(this.password, 10);
        next();
    });
});
userSchema.methods.comparePassword = function (plainPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const isMatch = yield bcrypt.compare(plainPassword, this.password);
        return isMatch;
    });
};
userSchema.methods.setJwtTokens = function (accessToken, refreshToken) {
    this.jwt_ac_token = accessToken;
    this.jwt_rf_token = refreshToken;
    this.save();
};
userSchema.methods.deleteAcToken = function () {
    this.jwt_ac_token = null;
    this.save();
};
const User = model("User", userSchema);
export default User;
//# sourceMappingURL=user.model.js.map