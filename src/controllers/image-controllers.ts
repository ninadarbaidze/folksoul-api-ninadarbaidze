import  { Request, Response, NextFunction } from 'express';
import SocialImages from '../models/SocialImages'
import SocialLinks from '../models/SocialLinks'
import Image from '../models/Image'
import BandMembers from '../models/BandMember'
import BandImages from '../models/BandImages'
import Band from '../models/Band'

  export const changeMemberAvatar = async (req: Request, res: Response, next: NextFunction) => {

    const memberId = req.body.memberId
    const imageUrl = req.file!
  
    try {
  
      const image = await Image.create({
        memberId,
        imageUrl: imageUrl.path,

      })
      const bandMember = await BandMembers.findById(memberId)
      bandMember?.image?.pop()
      bandMember?.image?.push(image)

      await bandMember!.save()
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


  export const changeSocialIcon = async (req: Request, res: Response, next: NextFunction) => {

    const socialId = req.body.socialId
    const imageUrl = req.file!
  
    try {
  
      const image = await SocialImages.create({
        socialId,
        imageUrl: imageUrl.path,

      })
      const socialLink = await SocialLinks.findById(socialId)
      socialLink?.image?.pop()
      socialLink?.image?.push(image)

      await socialLink!.save()
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
  export const changeBandLogo = async (req: Request, res: Response, next: NextFunction) => {

    const bandId = req.body.bandId
    const imageUrl = req.file!
  
    try {
  
      const image = await BandImages.create({
        bandId,
        imageUrl: imageUrl.path,

      })
      const band = await Band.findById(bandId)
      band?.image?.pop()
      band?.image?.push(image)

      await band!.save()
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
  