import express from 'express'
import { changeMemberAvatar} from '../controllers/image-controllers'



const router = express.Router()

router.post('/change-avatar', changeMemberAvatar)


export default router
