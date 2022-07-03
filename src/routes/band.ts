import express from 'express'
import { getBandById, editBand} from '../controllers/band-controller'
import isAuth from '../middlewares/auth-middleware'


const router = express.Router()

router.get('/about-band/:bandId', isAuth, getBandById)
router.patch('/edit-band/:bandId', isAuth,  editBand)

export default router
