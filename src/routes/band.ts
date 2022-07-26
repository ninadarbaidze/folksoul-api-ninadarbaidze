import express from 'express'
import {  editBand, getBand} from 'controllers/band-controller'
import isAuth from 'middlewares/auth-middleware'


const router = express.Router()

router.get('/bands', getBand)
router.patch('/edit-band/:bandId', isAuth,  editBand)

export default router
