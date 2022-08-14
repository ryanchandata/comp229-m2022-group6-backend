"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const surveySchema = new Schema({
    user: String,
    name: String,
    dateCreated: {
        type: String,
        default: new Date().toISOString()
    },
    activationDate: {
        type: Date,
        default: Date.now()
    },
    expirationDate: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: Date,
        default: "Yes"
    },
    responses: {
        type: Number,
        default: 0
    },
    question1: String,
    optionType1: String,
    optiondetails1_1: String,
    optiondetails1_2: String,
    optiondetails1_3: String,
    optiondetails1_4: String,
    question2: String,
    optionType2: String,
    optiondetails2_1: String,
    optiondetails2_2: String,
    optiondetails2_3: String,
    optiondetails2_4: String
}, {
    collection: "surveys"
});
const Model = mongoose_1.default.model("Survey", surveySchema);
exports.default = Model;
//# sourceMappingURL=survey.js.map