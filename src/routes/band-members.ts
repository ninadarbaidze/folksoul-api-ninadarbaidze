import express from 'express'
import { getMembers, getMemberById, addNewMember, editMember, deleteMember} from 'controllers'
import { validateBandMember }  from 'schemas'
import { isAuth } from 'middlewares'


const router = express.Router()

router.get('/band-members/',  getMembers)
router.get('/band-member/:memberId', isAuth, getMemberById)
router.post('/new-member', isAuth, validateBandMember(), addNewMember)
router.patch('/edit-member/:memberId', isAuth, validateBandMember(), editMember)
router.delete('/delete-member/:memberId', isAuth, validateBandMember(), deleteMember)

export default router
