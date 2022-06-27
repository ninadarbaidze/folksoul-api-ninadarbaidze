import express from 'express'
import { getSocials, getSocialById, addSocial, editSocial, deleteSocial} from '../controllers/social-controller'
import  validateSocials  from '../schemas/social-schema'
import isAuth from '../middlewares/auth-middleware'


const router = express.Router()

// add isAuth
router.get('/social-media/', getSocials)
router.get('/social-media/:socialId', getSocialById)
router.post('/social-media/',validateSocials,  addSocial)
router.put('/edit-social/:socialId', validateSocials, editSocial)
router.delete('/delete-social/:socialId', validateSocials, deleteSocial)
// router.post('/change-band-cover', validateBandMember(), changeMemberAvatar)

export default router