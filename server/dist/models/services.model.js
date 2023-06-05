import { Schema, model } from "mongoose";
const candidateSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
});
export default model("Candidate", candidateSchema);
//# sourceMappingURL=services.model.js.map