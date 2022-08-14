import { CallbackError } from 'mongoose';
import express from 'express';

import Survey from '../Models/survey';

import {UserDisplayName} from '../Util';

export function DisplaySurveyList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    //var Item = localStorage.getItem('youritem');
    
    Survey.find(function(err, surveysCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Survey Displayed Successfully', surveys: surveysCollection, user:req.user});

    })
}

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction):void
{
    res.json({success: true, msg: 'Add Page Displayed Successfully'});
}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction):void
{
    let id = req.params.id;

    //pass the id to the db and read the movie into the edit page
    Survey.findById(id, {}, {}, function(err,surveyToEdit)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        //show the edit view with the data
        res.json({success: true, msg: 'Edit Page Displayed Successfully', surveys: surveyToEdit});

    });
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction):void
{
  
      let newSurvey = new Survey
    ({
        name : req.body.name,
        activationDate : req.body.activationDate,
        expirationDate : req.body.expirationDate,
        question1 : req.body.question1,
        optionType1 : req.body.optionType1,
        optiondetails1_1: req.body.optiondetails1_1,
        optiondetails1_2: req.body.optiondetails1_2,
        optiondetails1_3: req.body.optiondetails1_3,
        optiondetails1_4: req.body.optiondetails1_4,
        question2 : req.body.question2,
        optionType2 : req.body.optionType2,
        optiondetails2_1: req.body.optiondetails2_1,
        optiondetails2_2: req.body.optiondetails2_2,
        optiondetails2_3: req.body.optiondetails2_3,
        optiondetails2_4: req.body.optiondetails2_4

    })

    //Insert the new Survey object into the database (survey collection)
    Survey.create(newSurvey, function(err: CallbackError)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        //new movie has been added -> refresh the movie-list
        return res.json({success: true, msg: 'Successfully Added Survey', survey: newSurvey});
    })
}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction):void
{
    let id = req.params.id;

    let updateSurveys = new Survey
    ({
      "_id": id,
      "name": req.body.name,
      "activationDate" : req.body.activationDate,
      "expirationDate" : req.body.expirationDate,
      "question1" : req.body.question1,
      "optionType1" : req.body.optionType1,
      "optiondetails1_1": req.body.optiondetails1_1,
      "optiondetails1_2": req.body.optiondetails1_2,
      "optiondetails1_3": req.body.optiondetails1_3,
      "optiondetails1_4": req.body.optiondetails1_4,
      "question2" : req.body.question2,
      "optionType2" : req.body.optionType2,
      "optiondetails2_1": req.body.optiondetails2_1,
      "optiondetails2_2": req.body.optiondetails2_2,
      "optiondetails2_3": req.body.optiondetails2_3,
      "optiondetails2_4": req.body.optiondetails2_4
    });

    //update the survey in the database
    Survey.updateOne({_id: id}, updateSurveys, function(err: CallbackError)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        //edit was successful -> go to the survey page
        res.json({success: true, msg: 'Successfully Edited Survey', survey: updateSurveys});
    });
}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    let id = req.params.id;

    //pass the id to the database and delete the movie
    Survey.remove({_id: id}, function(err: CallbackError)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        //delete was successful
        res.json({success: true, msg: 'Successfully Deleted Survey'});
    });
}