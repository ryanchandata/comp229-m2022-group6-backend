import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayResponseAddPage} from "../Controllers/auth"


router.get('/responseAddPage', DisplayResponseAddPage)



export default router;