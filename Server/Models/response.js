"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const responseSchema = new Schema({
    responseId: String,
    surveyId: String,
    question1_ans: String,
    question2_ans: String
}, {
    collection: "response"
});
const Model = mongoose_1.default.model("Response", responseSchema);
exports.default = Model;
//# sourceMappingURL=response.js.map