import { validationResult } from 'express-validator'
import  SocialLinks  from '../models/SocialLinks'
import { Request, Response, NextFunction } from 'express';

interface Error  {
    statusCode?: number;
  }

  export const getSocials = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const socials = await SocialLinks.find()
        .select('-__v')
      res.status(200).json(socials)
    } catch (err:any) {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    }
  }

export const getSocialById = async (req: Request, res: Response, next: NextFunction) => {
    const { socialId } = req.params
    if (!socialId.match(/^[0-9a-fA-F]{24}$/))
      res.status(422).json({ message: 'Please provide a valid id' })
  
    try {
      const socials = await SocialLinks.findById(socialId)
        .select('-__v')
  
      if (!socials)
        res.status(404).json({ message: 'Could not find any social links' })
  
      res.status(200).json({
        socials,
      })
    } catch (err: any) {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    }
  }

  export const addSocial = async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(422).json({ errorMessage: errors.array()[0].msg })
      return
    }
    const { name, url} = req.body
  
    try {
      const exists = await SocialLinks.findOne({ name })
      if (exists) {
        res.status(409).json({
          message: 'social media with this name already exists!',
        })
        return
      }
      const socialLink = await SocialLinks.create({
        name,
        url

      })
      res.status(201).json({
        message: 'Social media Created Successfully',
        socialLink,
      })
    } catch (err: any) {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    }
  }

  export const editSocial = async (req: Request, res: Response, next: NextFunction) => {
    const { socialId } = req.params
    const errors = validationResult(req)
    if (!errors.isEmpty())
      res.status(422).json({ errorMessage: errors.array()[0].msg })
  
    if (!socialId.match(/^[0-9a-fA-F]{24}$/))
      res.status(422).json({ message: 'Please provide a valid id' })
  
    try {
      const socials = await SocialLinks.findById(socialId)
  
      if (!socials) {
        res.status(404).json({ message: 'Could not find any band' })
        const error = new Error('Could not find any band') as Error
        error.statusCode = 404
        throw error
      }
  
      const updatedSocial = await SocialLinks.findByIdAndUpdate(
        socialId,
        req.body,
        {
          new: true,
        }
      )
      res.status(200).json({ message: 'Social info updated!', updatedSocial })
    } catch (err: any) {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    }
  }

 
  export const deleteSocial = async (req: Request, res: Response, next: NextFunction) => {
    const { socialId } = req.params
    if (!socialId.match(/^[0-9a-fA-F]{24}$/))
      res.status(422).json({ message: 'Please provide a valid id' })
  
    try {
      const social = await SocialLinks.findById(socialId)
      if (!social) {
        res.status(404).json({ message: 'Could not find any social media' })
        const error = new Error('Could not find any social media') as Error
        error.statusCode = 404
        throw error
      }
      social.remove()
      res.status(200).json({ message: 'Social media was deleted successfully' })
    } catch (err: any) {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    }
  }
