import { Schema, model } from "mongoose";
const companySchema = new Schema({
    name: {
        type: String,
        required: false,
    },
});
const Company = model("Company", companySchema);
export default Company;
//# sourceMappingURL=company.model.js.map