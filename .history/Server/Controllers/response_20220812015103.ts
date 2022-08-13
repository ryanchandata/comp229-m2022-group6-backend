import { CallbackError } from 'mongoose';
import express from 'express';

import Survey from '../Models/survey';
import Response from '../Models/response';

export function DisplaySurveyList(req: express.Request, res: express.Response, next: express.NextFunction)
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

}

export function ProcessResponseAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{

} 