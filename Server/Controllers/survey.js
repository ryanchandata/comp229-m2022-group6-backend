"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessEditPage = exports.ProcessAddPage = exports.DisplayEditPage = exports.DisplayAddPage = exports.DisplaySurveyList = void 0;
const survey_1 = __importDefault(require("../Models/survey"));
function DisplaySurveyList(req, res, next) {
    survey_1.default.find(function (err, surveysCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, msg: 'Survey Displayed Successfully', surveys: surveysCollection, user: req.user });
    });
}
exports.DisplaySurveyList = DisplaySurveyList;
function DisplayAddPage(req, res, next) {
    res.json({ success: true, msg: 'Add Page Displayed Successfully' });
}
exports.DisplayAddPage = DisplayAddPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    survey_1.default.findById(id, {}, {}, function (err, surveyToEdit) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, msg: 'Edit Page Displayed Successfully', surveys: surveyToEdit });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function ProcessAddPage(req, res, next) {
    let questionsTitles = [
        req.body.question1,
        req.body.question2
    ];
    let optionDetails = [
        [req.body.options1, req.body.options2, req.body.options3, req.body.options4],
        [req.body.options5, req.body.options6, req.body.options7, req.body.options8]
    ];
    let optionType = [
        req.body.optionType1,
        req.body.optionType2
    ];
    let optionsArray = [];
    let questionsArray = [];
    for (let i = 0; i < questionsTitles.length; i++) {
        for (let j = 0; j < 4; j++) {
            optionsArray.push({
                "details": optionDetails[i][j]
            });
        }
        questionsArray.push({
            title: questionsTitles[i],
            optionType: optionType[i],
            options: optionsArray
        });
    }
    let newSurvey = new survey_1.default({
        name: req.body.name,
        activationDate: req.body.activationDate,
        expirationDate: req.body.expirationDate,
        question1: req.body.question1,
        optionType1: req.body.optionType1,
        optiondetails1_1: req.body.options1,
        optiondetails1_2: req.body.options2,
        optiondetails1_3: req.body.options3,
        optiondetails1_4: req.body.options4,
        question2: req.body.question2,
        optionType2: req.body.optionType2,
        optiondetails2_1: req.body.options5,
        optiondetails2_2: req.body.options6,
        optiondetails2_3: req.body.options7,
        optiondetails2_4: req.body.options8
    });
    survey_1.default.create(newSurvey, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        return res.json({ success: true, msg: 'Successfully Added Survey', survey: newSurvey });
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let questionsTitles = [
        req.body.question1,
        req.body.question2
    ];
    let optionDetails = [
        [req.body.options1, req.body.options2, req.body.options3, req.body.options4],
        [req.body.options5, req.body.options6, req.body.options7, req.body.options8]
    ];
    let optionType = [
        req.body.optionType1,
        req.body.optionType2
    ];
    let optionsArray = [];
    let questionsArray = [];
    for (let i = 0; i < questionsTitles.length; i++) {
        for (let j = 0; j < 4; j++) {
            optionsArray.push({
                "details": optionDetails[i][j]
            });
        }
        questionsArray.push({
            title: questionsTitles[i],
            optionType: optionType[i],
            options: optionsArray
        });
    }
    let updateSurveys = new survey_1.default({
        "_id": id,
        "name": req.body.name,
        "activationDate": req.body.activationDate,
        "expirationDate": req.body.expirationDate,
        "question1": req.body.question1,
        "optionType1": req.body.optionType1,
        "optiondetails1_1": req.body.options1,
        "optiondetails1_2": req.body.options2,
        "optiondetails1_3": req.body.options3,
        "optiondetails1_4": req.body.options4,
        "question2": req.body.question2,
        "optionType2": req.body.optionType2,
        "optiondetails2_1": req.body.options5,
        "optiondetails2_2": req.body.options6,
        "optiondetails2_3": req.body.options7,
        "optiondetails2_4": req.body.options8
    });
    survey_1.default.updateOne({ _id: id }, updateSurveys, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, msg: 'Successfully Edited Survey', survey: updateSurveys });
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    survey_1.default.remove({ _id: id }, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, msg: 'Successfully Deleted Survey' });
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=survey.js.map