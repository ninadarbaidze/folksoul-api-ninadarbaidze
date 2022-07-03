import express from 'express'
import { getMembers, getMemberById, addNewMember, editMember, deleteMember} from '../controllers/band-members-controller'
import  validateBandMember  from '../schemas/band-schema'
import isAuth from '../middlewares/auth-middleware'


const router = express.Router()

// add isAuth
router.get('/band-members/', isAuth, getMembers)
router.get('/band-member/:memberId', isAuth, getMemberById)
router.post('/new-member', isAuth, validateBandMember(), addNewMember)
router.patch('/edit-member/:memberId', isAuth, validateBandMember(), editMember)
router.delete('/delete-member/:memberId', isAuth, validateBandMember(), deleteMember)

export default router
