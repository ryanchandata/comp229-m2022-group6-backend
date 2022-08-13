import { CallbackError } from 'mongoose';
import express from 'express';

import Survey from '../Models/survey';
import Response from '../Models/response';

export function DisplayPublicSurveyList(req: express.Request, res: express.Response, next: express.NextFunction):void
{
    
    Response.find(function(err, responseCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Response Displayed Successfully', response: responseCollection, user:req.user});

    })
}