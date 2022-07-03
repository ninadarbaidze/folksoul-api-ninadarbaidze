import express from 'express'
import { changeMemberAvatar} from '../controllers/image-controllers'
import multer from 'multer';
import path from 'path'

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


export default router
