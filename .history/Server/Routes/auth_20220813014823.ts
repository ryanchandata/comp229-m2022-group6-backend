import express from 'express';
const router = express.Router();

//import the controller module
import {ProcessLogoutPage, ProcessLoginPage, ProcessRegisterPage, DisplayUserEditPage, ProcessUserEditPage} from "../Controllers/auth"


/* Process Login page. */
router.post('/login', ProcessLoginPage);

/* Process Register page. */
router.post('/register', ProcessRegisterPage);

router.get('/userEdit/:id', DisplayUserEditPage);

router.post('/userEdit/:id', ProcessUserEditPage);

/* Process Logout page. */
router.get('/logout', ProcessLogoutPage);

export default router;

