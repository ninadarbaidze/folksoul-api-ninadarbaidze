import express from 'express'
import { getMembers, getMemberById, addNewMember, editMember, deleteMember} from '../controllers/band-members-controller'
import  validateBandMember  from '../schemas/band-schema'
import isAuth from '../middlewares/auth-middleware'


const router = express.Router()

// add isAuth
router.get('/band-members/', getMembers)
router.get('/band-member/:memberId', getMemberById)
router.post('/new-member',  validateBandMember(), addNewMember)
router.patch('/edit-member/:memberId', validateBandMember(), editMember)
router.delete('/delete-member', validateBandMember(), deleteMember)
// router.post('/change-avatar', validateBandMember(), changeMemberAvatar)

export default router
