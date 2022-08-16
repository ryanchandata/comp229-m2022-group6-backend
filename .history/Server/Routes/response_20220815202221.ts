import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayPublicSurveyList, DisplayResponseAddPage, ProcessResponseAddPage, DisplayResponseStatPage} from "../Controllers/response";


router.get('/publicSurveyList', DisplayPublicSurveyList);

router.get('/responseAddPage/:id', DisplayResponseAddPage);

router.get('/responseStatPage/:id', DisplayResponseStatPage1);

router.get('/responseStatAns1/:id', DisplayResponseStatPage2);

router.post('/responseAddPage/:id', ProcessResponseAddPage);



export default router;