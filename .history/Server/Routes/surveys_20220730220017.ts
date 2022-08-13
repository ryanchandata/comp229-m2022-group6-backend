import express from 'express';
const router = express.Router();

import {DisplaySurveyList, DisplayAddPage, DisplayEditPage, ProcessAddPage, ProcessEditPage, ProcessDeletePage} from '../Controllers/survey';

//Display Movie List Page
router.get('/survey', DisplaySurveyList);

router.get('/publicSurveyList', DisplayPublicSurveyList)

router.get('/responseAddPage', DisplayResponeAddPage)

router.get('/add', DisplayAddPage);

router.get('/edit/:id', DisplayEditPage);

router.post('/response')

router.post('/add', ProcessAddPage);

router.post('/edit/:id', ProcessEditPage);

router.post('/delete/:id', ProcessDeletePage);

export default router;