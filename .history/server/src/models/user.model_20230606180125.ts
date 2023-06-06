import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { emailRegex } from "../config/constants/regex.constant.js";
import { IUser, ERoles } from "../types/global.js";
// import path from "path";

const userSchema: Schema<IUser> = new Schema({
    email: {
        type: String,
        required: false,
        unique: true,
        match: [emailRegex, "Invalid email address"],
    },
    username: {
        
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

userSchema.pre<IUser>("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.comparePassword = async function (plainPassword: string) {
    const isMatch = await bcrypt.compare(plainPassword, this.password);
    return isMatch;
}

userSchema.methods.setJwtTokens = function (accessToken: string, refreshToken: string) {
    this.jwt_ac_token = accessToken;
    this.jwt_rf_token = refreshToken;
    this.save();
}

userSchema.methods.deleteAcToken = function () {
    this.jwt_ac_token = null;
    this.save();
};

const User = model<IUser>("User", userSchema);

export default User;