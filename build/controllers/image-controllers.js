"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeSocialIcon = exports.changeMemberAvatar = exports.changeBandLogo = void 0;

var _SocialImages = _interopRequireDefault(require("../models/SocialImages"));

var _SocialLinks = _interopRequireDefault(require("../models/SocialLinks"));

var _Image = _interopRequireDefault(require("../models/Image"));

var _BandMember = _interopRequireDefault(require("../models/BandMember"));

var _BandImages = _interopRequireDefault(require("../models/BandImages"));

var _Band = _interopRequireDefault(require("../models/Band"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const changeMemberAvatar = async (req, res, next) => {
  const memberId = req.body.memberId;
  const imageUrl = req.file;

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

const changeSocialIcon = async (req, res, next) => {
  const socialId = req.body.socialId;
  const imageUrl = req.file;

  try {
    var _socialLink$image, _socialLink$image2;

    const image = await _SocialImages.default.create({
      socialId,
      imageUrl: imageUrl.path
    });
    const socialLink = await _SocialLinks.default.findById(socialId);
    socialLink === null || socialLink === void 0 ? void 0 : (_socialLink$image = socialLink.image) === null || _socialLink$image === void 0 ? void 0 : _socialLink$image.pop();
    socialLink === null || socialLink === void 0 ? void 0 : (_socialLink$image2 = socialLink.image) === null || _socialLink$image2 === void 0 ? void 0 : _socialLink$image2.push(image);
    await socialLink.save();
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

exports.changeSocialIcon = changeSocialIcon;

const changeBandLogo = async (req, res, next) => {
  const bandId = req.body.bandId;
  const imageUrl = req.file;

  try {
    var _band$image, _band$image2;

    const image = await _BandImages.default.create({
      bandId,
      imageUrl: imageUrl.path
    });
    const band = await _Band.default.findById(bandId);
    band === null || band === void 0 ? void 0 : (_band$image = band.image) === null || _band$image === void 0 ? void 0 : _band$image.pop();
    band === null || band === void 0 ? void 0 : (_band$image2 = band.image) === null || _band$image2 === void 0 ? void 0 : _band$image2.push(image);
    await band.save();
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

exports.changeBandLogo = changeBandLogo;