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
};

exports.changeMemberAvatar = changeMemberAvatar;