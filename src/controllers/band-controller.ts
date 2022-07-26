import { validationResult } from 'express-validator'
import  Band  from 'models/Band'
import { Request, Response, NextFunction } from 'express';
import {Error} from 'types/defaults'

  
export const getBand = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const band = await Band.find()
        .select('-__v').populate({ path: 'image'})
      res.status(200).json(band[0])
    } catch (err:any) {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    }
  }

  export const editBand = async (req: Request, res: Response, next: NextFunction) => {
    const { bandId } = req.params
    const errors = validationResult(req)
    if (!errors.isEmpty())
      res.status(422).json({ errorMessage: errors.array()[0].msg })
  
    if (!bandId.match(/^[0-9a-fA-F]{24}$/))
      res.status(422).json({ message: 'Please provide a valid id' })
  
    try {
      const band = await Band.findById(bandId)
  
      if (!band) {
        res.status(404).json({ message: 'Could not find any band' })
        const error = new Error('Could not find any band') as Error
        error.statusCode = 404
        throw error
      }
  
      const updatedBand = await Band.findByIdAndUpdate(
        bandId,
        req.body,
        {
          new: true,
        }
      )
      res.status(200).json({ message: 'Band info updated!', updatedBand })
    } catch (err: any) {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    }
  }

 