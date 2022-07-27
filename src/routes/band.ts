import express from 'express'
import {  editBand, getBand} from 'controllers'
import { isAuth } from 'middlewares'


const router = express.Router()

router.get('/bands', getBand)
router.patch('/edit-band/:bandId', isAuth,  editBand)

export default router
