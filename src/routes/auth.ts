import express from 'express'
import { login } from '../controllers/auth-controller'
import  validateAuthorization  from '../schemas/auth-schema'

const router = express.Router()

router.post('/auth', validateAuthorization(), login)
// router.post('/auth', login)

export default router
