import { Schema, model } from "mongoose";
import { ICandidate } from "types/global.js";


const candidateSchema: Schema<ICandidate> = new Schema({
    name: {
        type: String,
        required: false,
    },
})



export default model<ICandidate>("Candidate", candidateSchema);