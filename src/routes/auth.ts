import express from 'express'
import { login } from 'controllers'

const router = express.Router()

router.post('/auth', login)

export default router