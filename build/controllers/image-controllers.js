"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeMemberAvatar = void 0;

var _Image = _interopRequireDefault(require("../models/Image"));

var _BandMember = _interopRequireDefault(require("../models/BandMember"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const changeMemberAvatar = async (req, res, next) => {
  const memberId = req.body.memberId;
  const imageUrl = req.file;
  console.log(imageUrl);

  try {
    var _bandMember$image, _bandMember$image2;

    // const exists = await Image.findOne({ name })
    // if (exists) {
    //   res.status(409).json({
    //     message: 'social media with this name already exists!',
    //   })
    //   return
    // }
    const image = await _Image.default.create({
      memberId,
      imageUrl: imageUrl.path
    });
    const bandMember = await _BandMember.default.findById(memberId);
    bandMember === null || bandMember === void 0 ? void 0 : (_bandMember$image = bandMember.image) === null || _bandMember$image === void 0 ? void 0 : _bandMember$image.pop();
    bandMember === null || bandMember === void 0 ? void 0 : (_bandMember$image2 = bandMember.image) === null || _bandMember$image2 === void 0 ? void 0 : _bandMember$image2.push(image);
    await bandMember.save();
    res.status(201).json({
      message: 'Image was uploaded Successfully',
      image
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
}; // export const editSocial = async (req: Request, res: Response, next: NextFunction) => {
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


exports.changeMemberAvatar = changeMemberAvatar;