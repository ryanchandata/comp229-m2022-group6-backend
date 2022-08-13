import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayResponseAddPage} from "../Controllers/auth"


router.get('/responseAddPage', DisplayResponseAddPage)

/* Process Register page. */
router.post('/register', ProcessRegisterPage);

/* Process Logout page. */
router.get('/logout', ProcessLogoutPage);

export default router;