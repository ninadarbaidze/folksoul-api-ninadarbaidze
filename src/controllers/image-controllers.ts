import  { Request, Response, NextFunction } from 'express';
import Image from '../models/Image'
import BandMembers from '../models/BandMember'
import path from 'path'
import fs from 'fs'

interface Error  {
    statusCode?: number;
  }



  export const changeMemberAvatar = async (req: Request, res: Response, next: NextFunction) => {

    const memberId = req.body.memberId
    const imageUrl = req.body.imageUrl
  
    try {
      // const exists = await Image.findOne({ name })
      // if (exists) {
      //   res.status(409).json({
      //     message: 'social media with this name already exists!',
      //   })
      //   return
      // }
      const image = await Image.create({
        memberId,
        imageUrl

      })
      const bandMember = await BandMembers.findById(memberId)
      bandMember?.image?.pop()
      bandMember?.image?.push(image)

      await bandMember?.save()
      res.status(201).json({
        message: 'Image was uploaded Successfully',
        image,
      })
    } catch (err: any) {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    }
  }

  // export const editSocial = async (req: Request, res: Response, next: NextFunction) => {
  //   const { socialId } = req.params
  //   const errors = validationResult(req)
  //   if (!errors.isEmpty())
  //     res.status(422).json({ errorMessage: errors.array()[0].msg })
  
  //   if (!socialId.match(/^[0-9a-fA-F]{24}$/))
  //     res.status(422).json({ message: 'Please provide a valid id' })
  
  //   try {
  //     const socials = await SocialLinks.findById(socialId)
  
  //     if (!socials) {
  //       res.status(404).json({ message: 'Could not find any band' })
  //       const error = new Error('Could not find any band') as Error
  //       error.statusCode = 404
  //       throw error
  //     }
  
  //     const updatedSocial = await SocialLinks.findByIdAndUpdate(
  //       socialId,
  //       req.body,
  //       {
  //         new: true,
  //       }
  //     )
  //     res.status(200).json({ message: 'Social info updated!', updatedSocial })
  //   } catch (err: any) {
  //     if (!err.statusCode) {
  //       err.statusCode = 500
  //     }
  //     next(err)
  //   }
  // }

