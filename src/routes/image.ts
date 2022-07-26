import express from 'express'
import { changeMemberAvatar, changeSocialIcon, changeBandLogo} from 'controllers/image-controllers'
import multer from 'multer';
import isAuth from 'middlewares/auth-middleware'


const storageConfig = multer.diskStorage({
  destination: function(_req, _file, cb) {
    cb(null, 'images');
  },
  filename: function(_req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storageConfig });


const router = express.Router()

router.post('/change-avatar', isAuth, upload.single('image'), changeMemberAvatar)
router.post('/change-social-icon', isAuth, upload.single('image'), changeSocialIcon)
router.post('/change-band-logo', isAuth, upload.single('image'), changeBandLogo)


export default router
