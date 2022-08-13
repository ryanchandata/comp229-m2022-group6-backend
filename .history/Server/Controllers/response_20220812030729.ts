import { CallbackError } from 'mongoose';
import express from 'express';

import Survey from '../Models/survey';
import Response from '../Models/response';

export function DisplayPublicSurveyList(req: express.Request, res: express.Response, next: express.NextFunction)
{
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

export function DisplayResponseAddPage(req: express.Request, res: express.Response, next: express.NextFunction):void
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

export function ProcessResponseAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{

    let newResponse = new Response
    ({
        responseId : req.body.responseId,
        surveyId : req.body.surveyId,
        question1_ans : req.body.question1_ans,
        question2_ans : req.body.question2_ans

    })

    //Insert the new Response object into the database (response collection)
    Response.create(newResponse, function(err: CallbackError)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        //new response has been added -> refresh the survey-list
        return res.json({success: true, msg: 'Successfully Added Response', response: newResponse});
    });
    

    let updateSurveys = new Survey
    ({
      "_id": id,
    });

    Survey.updateOne({_id: id}, {$inc: {"response": 1 }}, function(err: CallbackError)
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

export function DisplayResponseStatPage(req: express.Request, res: express.Response, next: express.NextFunction):void
{
   
}