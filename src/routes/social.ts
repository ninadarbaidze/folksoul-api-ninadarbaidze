import express from 'express'
import { getSocials, getSocialById, addSocial, editSocial, deleteSocial} from '../controllers/social-controller'
import  validateSocials  from '../schemas/social-schema'
import isAuth from '../middlewares/auth-middleware'


const router = express.Router()

router.get('/social-media/', getSocials)
router.get('/social-media/:socialId', isAuth, getSocialById)
router.post('/add-social', isAuth, validateSocials(),  addSocial)
router.patch('/edit-social/:socialId', isAuth, validateSocials(), editSocial)
router.delete('/delete-social/:socialId', isAuth, validateSocials(), deleteSocial)

export default router
