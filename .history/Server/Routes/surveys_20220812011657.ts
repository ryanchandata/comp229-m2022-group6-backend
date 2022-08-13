import express from 'express';
const router = express.Router();

import {DisplaySurveyList, DisplayPublicSurveyList, DisplayResponseAddPage, DisplayAddPage, DisplayEditPage, ProcessResponseAddPage, ProcessAddPage, ProcessEditPage, ProcessDeletePage} from '../Controllers/survey';

//Display Movie List Page
router.get('/survey', DisplaySurveyList);

router.get('/publicSurveyList', DisplayPublicSurveyList);

router.get('/add', DisplayAddPage);

router.get('/edit/:id', DisplayEditPage);

router.post('/responseAddPage', ProcessResponseAddPage)

router.post('/add', ProcessAddPage);

router.post('/edit/:id', ProcessEditPage);

router.post('/delete/:id', ProcessDeletePage);

export default router;