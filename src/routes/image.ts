import express from 'express'
import { changeMemberAvatar, changeSocialIcon} from '../controllers/image-controllers'
import multer from 'multer';

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

router.post('/change-avatar', upload.single('image'), changeMemberAvatar)
router.post('/change-social-icon', upload.single('image'), changeSocialIcon)


export default router
