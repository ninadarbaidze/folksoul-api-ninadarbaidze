import { validationResult } from 'express-validator'
import  BandMember  from 'models/BandMember'
import { Request, Response, NextFunction } from 'express';
import {Error} from 'types/defaults'



export const getMembers = async (req: Request, res: Response, next: NextFunction) => {
    const PAGE_SIZE = 3
    const page = parseInt(req.query.page as string || '0') 
    let bandMembers
    try {
      if(req.query.page) {
         bandMembers = await BandMember.find()
          .select('-__v').limit(PAGE_SIZE).skip(PAGE_SIZE * page)
        const total = await BandMember.countDocuments()
        res.status(200).json({bandMembers, total: Math.ceil(total / PAGE_SIZE)})
      } else {
        bandMembers = await BandMember.find()
          .select('-__v').sort({'orbitLength': 'descending'})
        res.status(200).json(bandMembers)
      }
    } catch (err:any) {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    }
  }

export const getMemberById = async (req: Request, res: Response, next: NextFunction) => {
    const { memberId } = req.params
    if (!memberId.match(/^[0-9a-fA-F]{24}$/))
      res.status(422).json({ message: 'Please provide a valid id' })
  
    try {
      const bandMember = await BandMember.findById(memberId)
        .select('-__v')
  
      if (!bandMember)
        res.status(404).json({ message: 'Could not find any band member' })
  
      res.status(200).json({
        bandMember,
      })
    } catch (err: any) {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    }
  }


  export const addNewMember = async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(422).json({ errorMessage: errors.array()[0].msg })
      return
    }
    const { name, instrument, orbitLength, color, biography} = req.body
  
    try {
      const exists = await BandMember.findOne({ name })
      if (exists) {
        res.status(409).json({
          message: 'Band member with this name already exists!',
        })
        return
      }
      const brandMember = await BandMember.create({
        name,
        instrument,
        orbitLength,
        color,
        biography,
        image: ''

      })
      res.status(201).json({
        message: 'Band member Created Successfully',
        brandMember,
      })
    } catch (err: any) {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    }
  }


  export const editMember = async (req: Request, res: Response, next: NextFunction) => {
    const { memberId } = req.params
    const errors = validationResult(req)
    if (!errors.isEmpty())
      res.status(422).json({ errorMessage: errors.array()[0].msg })
  
    if (!memberId.match(/^[0-9a-fA-F]{24}$/))
      res.status(422).json({ message: 'Please provide a valid id' })
  
    try {
      const bandMember = await BandMember.findById(memberId)
  
      if (!bandMember) {
        res.status(404).json({ message: 'Could not find any band member' })
        const error = new Error('Could not find any band member') as Error
        error.statusCode = 404
        throw error
      }
  
      const updatedBandMember = await BandMember.findByIdAndUpdate(
        memberId,
        req.body,
        {
          new: true,
        }
      )
      res.status(200).json({ message: 'Band member updated!', updatedBandMember })
    } catch (err: any) {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    }
  }

  export const deleteMember = async (req: Request, res: Response, next: NextFunction) => {
    const { memberId } = req.params
    if (!memberId.match(/^[0-9a-fA-F]{24}$/))
      res.status(422).json({ message: 'Please provide a valid id' })
  
    try {
      const bandMember = await BandMember.findById(memberId)
      if (!bandMember) {
        res.status(404).json({ message: 'Could not find any band member' })
        const error = new Error('Could not find any band member') as Error
        error.statusCode = 404
        throw error
      }
      bandMember.remove()
      res.status(200).json({ message: 'Band member was deleted successfully' })
    } catch (err: any) {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    }
  }


