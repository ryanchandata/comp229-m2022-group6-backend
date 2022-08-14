import express from 'express';
const router = express.Router();

//import the controller module
import {ProcessLogoutPage, ProcessLoginPage, ProcessRegisterPage, DisplayEditPage, } from "../Controllers/auth"


/* Process Login page. */
router.post('/login', ProcessLoginPage);

/* Process Register page. */
router.post('/register', ProcessRegisterPage);

router.get('/edit/:id', DisplayEditPage);

router.post('/edit/:id', ProcessEditPage);

/* Process Logout page. */
router.get('/logout', ProcessLogoutPage);

export default router;

