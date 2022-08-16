"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayResponseStatPage = exports.ProcessResponseAddPage = exports.DisplayResponseAddPage = exports.DisplayPublicSurveyList = void 0;
const survey_1 = __importDefault(require("../Models/survey"));
const response_1 = __importDefault(require("../Models/response"));
function DisplayPublicSurveyList(req, res, next) {
    const date = new Date();
    const filters = {
        activationDate: {
            $lt: date
        },
        expirationDate: {
            $gte: date
        }
    };
    survey_1.default.find(function (err, surveysCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, msg: 'Survey Displayed Successfully', surveys: surveysCollection, user: req.user });
    }).where(filters);
}
exports.DisplayPublicSurveyList = DisplayPublicSurveyList;
function DisplayResponseAddPage(req, res, next) {
    let id = req.params.id;
    survey_1.default.findById(id, {}, {}, function (err, surveyToEdit) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, msg: 'Edit Page Displayed Successfully', surveys: surveyToEdit });
    });
}
exports.DisplayResponseAddPage = DisplayResponseAddPage;
function ProcessResponseAddPage(req, res, next) {
    let newResponse = new response_1.default({
        responseId: req.body.responseId,
        surveyId: req.body.surveyId,
        question1_ans: req.body.question1_ans,
        question2_ans: req.body.question2_ans
    });
    response_1.default.create(newResponse, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
    });
    let id = req.params.id;
    let updateSurveys = new survey_1.default({
        "_id": id,
    });
    survey_1.default.updateOne({ _id: id }, { $inc: { responses: 1 } }, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, msg: 'Successfully Edited Survey', survey: updateSurveys });
    });
}
exports.ProcessResponseAddPage = ProcessResponseAddPage;
function DisplayResponseStatPage(req, res, next) {
    let id = req.params.id;
    response_1.default.aggregate([
        {
            '$match': {
                'surveyId': id
            }
        }, {
            '$group': {
                '_id': '$question1_ans',
                'count': {
                    '$sum': 1
                }
            }
        }
    ], function (err, repsonCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, msg: 'Respone Stat Displayed Successfully', repson: repsonCollection, user: req.user });
    });
}
exports.DisplayResponseStatPage = DisplayResponseStatPage;
//# sourceMappingURL=response.js.map