import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayPublicSurveyList} from "../Controllers/survey";


router.get('/publicSurveyList', DisplayPublicSurveyList);

router.get('/responseAddPage', DisplayResponseAddPage);

router.post('/responseAddPage', ProcessResponseAddPage);



export default router;