import express from 'express';
const router = express.Router();
import userCtrl from '../controllers/userCtrl.js';
import auth from '../middleware/auth.js';


router.post('/register', userCtrl.register)

router.post('/activation', userCtrl.activateEmail)

router.post('/login', userCtrl.login)

router.post('/refresh_token', userCtrl.getAccessToken)

router.get('/infor',auth, userCtrl.getUserInfor)

router.patch('/update',auth, userCtrl.updateUser)

// router.post('/reset', auth, userCtrl.resetPassword)

router.get('/logout', userCtrl.logout)

export default router;