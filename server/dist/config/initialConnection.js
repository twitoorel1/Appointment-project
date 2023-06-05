var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from "mongoose";
const MONGO_CONNECTION_URI = process.env.NODE_ENV === "development"
    ? process.env.MONGO_ATLAS_URI_DEVELOPMENT
    : process.env.MONGO_ATLAS_URI;
const initialMongoConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    // mongoose.set("strictQuery", false);
    return new Promise((resolve, reject) => {
        resolve(mongoose.connect(String(MONGO_CONNECTION_URI)));
    });
});
export default initialMongoConnection;
//# sourceMappingURL=initialConnection.js.map