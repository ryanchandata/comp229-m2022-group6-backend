import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayPublicSurveyList, DisplayResponseAddPage, ProcessResponseAddPage} from "../Controllers/survey";


router.get('/publicSurveyList', DisplayPublicSurveyList);

router.get('/responseAddPage/:id', DisplayResponseAddPage);

router.post('/responseAddPage', ProcessResponseAddPage);



export default router;