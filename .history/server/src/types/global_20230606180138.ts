import { Response, Request, NextFunction } from "express";
import { Secret } from "jsonwebtoken";

export enum ERoles {
    admin = "admin",
    employee = "employee",
    member = "member"
}

export interface IUser extends Document {
    _id: string;
    email: string;
    firstName: string;
    firstName: string;
    lastName: string;
    password: string;
    phoneNumber?: Number;
    role: string;
    imgSRC?: string;
    jwt_ac_token?: Secret;
    jwt_rf_token?: Secret;
    comparePassword: Function;
    setJwtTokens: Function;
    deleteAcToken: Function;
    isModified: Function;
}

export interface ICompany extends Document {
    _id: string;
    name: string;
    city: string;
}

export interface ICandidate extends Document {
    _id: string;
    name: string;
}

export interface IRequestUserId extends Request {
    user?: string | object | null | undefined;
}

declare module "express" {
    interface Request {
        // user?: string | object | null | undefined | any;
        user?: IUser | null | undefined | any;
    }
}