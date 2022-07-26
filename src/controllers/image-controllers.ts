import  { Request, Response, NextFunction } from 'express';
import SocialImages from 'models/SocialImages'
import SocialLinks from 'models/SocialLinks'
import BandMembers from 'models/BandMember'
import Band from 'models/Band'

  export const changeMemberAvatar = async (req: Request, res: Response, next: NextFunction) => {

    const memberId = req.body.memberId
    const imageUrl = req.file!
  
    try {
  
      const bandMember = await BandMembers.findByIdAndUpdate(
        memberId,
        {image: imageUrl.path},
        {
          new: true,
        }
      )      


      await bandMember!.save()
      res.status(201).json({
        message: 'Image was uploaded Successfully',
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
  

      const band = await Band.findByIdAndUpdate(
        bandId,
        {image: imageUrl.path},
        {
          new: true,
        }
      )

      await band!.save()
      res.status(201).json({
        message: 'Image was uploaded Successfully',
      })
    } catch (err: any) {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    }
  }
  