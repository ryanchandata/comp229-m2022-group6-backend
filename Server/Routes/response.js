"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const response_1 = require("../Controllers/response");
router.get('/publicSurveyList', response_1.DisplayPublicSurveyList);
router.get('/responseAddPage/:id', response_1.DisplayResponseAddPage);
router.get('/responseStatAns1/:id', response_1.DisplayResponseStatPage1);
router.get('/responseStatAns2/:id', response_1.DisplayResponseStatPage2);
router.post('/responseAddPage/:id', response_1.ProcessResponseAddPage);
exports.default = router;
//# sourceMappingURL=response.js.map