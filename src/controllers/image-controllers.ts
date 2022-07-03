import  { Request, Response, NextFunction } from 'express';
import Image from '../models/Image'
import BandMembers from '../models/BandMember'

  export const changeMemberAvatar = async (req: Request, res: Response, next: NextFunction) => {

    const memberId = req.body.memberId
    const imageUrl = req.file!
    console.log(imageUrl)
  
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
