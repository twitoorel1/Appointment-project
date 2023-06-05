import { NextFunction, Request, Response } from "express";
// import Company from "../models/company.model.js";
import { BadRequestError, NotFoundError, ServerError, UnauthorizeError } from "../errors/Errors.js";

export const testRoute = async (req: Request, res: Response, next: NextFunction) => {
    res.json({ status: "ok", data: req.user });
}
