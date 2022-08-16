import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayPublicSurveyList, DisplayResponseAddPage, ProcessResponseAddPage, DisplayResponseStatPage1, DisplayResponseStatPage2} from "../Controllers/response";


router.get('/publicSurveyList', DisplayPublicSurveyList);

router.get('/responseAddPage/:id', DisplayResponseAddPage);

router.get('/responseStatAns1/:id', DisplayResponseStatPage1);

router.get('/responseStatAns2/:id', DisplayResponseStatPage2);

router.post('/responseAddPage/:id', ProcessResponseAddPage);



export default router;