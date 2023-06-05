import { Schema, model } from "mongoose";
import { ICompany } from "types/global.js";


const companySchema: Schema<ICompany> = new Schema({
    name: {
        type: String,
        required: false,
    },

})


const Company = model<ICompany>("Company", companySchema);

export default Company;