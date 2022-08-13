import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayPublicSurveyList, DisplayResponseAddPage, ProcessResponseAddPage} from "../Controllers/response";


router.get('/publicSurveyList', DisplayPublicSurveyList);

router.get('/responseAddPage/:id', DisplayResponseAddPage);

router.get('/responseStatPage/:id', Display)

router.post('/responseAddPage/:id', ProcessResponseAddPage);



export default router;