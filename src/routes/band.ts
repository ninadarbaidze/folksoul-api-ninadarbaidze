import express from 'express'
import { getBandById, editBand} from '../controllers/band-controller'
import  validateBandMember  from '../schemas/band-schema'
import isAuth from '../middlewares/auth-middleware'


const router = express.Router()

// add isAuth
router.get('/about-band/:bandId', getBandById)
router.patch('/edit-band/:bandId',  editBand)
// router.post('/change-band-cover', validateBandMember(), changeMemberAvatar)

export default router
