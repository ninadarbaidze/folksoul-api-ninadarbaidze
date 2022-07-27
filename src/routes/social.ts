import express from 'express'
import { getSocials, getSocialById, addSocial, editSocial, deleteSocial} from 'controllers'
import { validateSocials }  from 'schemas'

import { isAuth } from 'middlewares'


const router = express.Router()

router.get('/social-media/', getSocials)
router.get('/social-media/:socialId', isAuth, getSocialById)
router.post('/add-social', isAuth, validateSocials(),  addSocial)
router.patch('/edit-social/:socialId', isAuth, validateSocials(), editSocial)
router.delete('/delete-social/:socialId', isAuth, validateSocials(), deleteSocial)

export default router
