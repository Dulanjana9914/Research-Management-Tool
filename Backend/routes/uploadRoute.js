import express from 'express'
import uploadImage from'../middleware/uploadImage.js';
import uploadCtrl from '../controllers/uploadCtrl.js';
import auth from '../middleware/auth.js';

const router=express.Router();

router.post('/upload_avatar', uploadImage, auth, uploadCtrl.uploadAvatar)

export default router;