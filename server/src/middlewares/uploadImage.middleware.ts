import multer from "multer";
import { BadRequestError } from "../errors/Errors.js";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (req.originalUrl === "/auth/register") {
            cb(null, "uploads/profile/");
        } else {
            cb(null, "uploads/");
        }
    },

    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.fieldname}-${file.originalname}`);
    }
})

export const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 1024 }, // 1 Gb
    fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            return cb(new BadRequestError(`Only image files are allowed!`));
        }
        cb(null, true);
    }
});