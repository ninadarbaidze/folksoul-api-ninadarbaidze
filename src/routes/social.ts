import express from 'express'
import { getSocials, getSocialById, addSocial, editSocial, deleteSocial} from '../controllers/social-controller'
import  validateSocials  from '../schemas/social-schema'
import isAuth from '../middlewares/auth-middleware'


const router = express.Router()

// add isAuth
router.get('/social-media/', getSocials)
router.get('/social-media/:socialId', getSocialById)
router.post('/add-social', isAuth, validateSocials(),  addSocial)
router.put('/edit-social/:socialId', isAuth, validateSocials(), editSocial)
router.delete('/delete-social/', isAuth, validateSocials(), deleteSocial)
// router.post('/change-band-cover', validateBandMember(), changeMemberAvatar)

export default router
