import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayResponseAddPage} from "../Controllers/survey";


router.get('/responseAddPage', DisplayResponseAddPage)



export default router;