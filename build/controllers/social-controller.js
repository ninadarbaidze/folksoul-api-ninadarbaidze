"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSocials = exports.getSocialById = exports.editSocial = exports.deleteSocial = exports.addSocial = void 0;

var _expressValidator = require("express-validator");

var _SocialLinks = _interopRequireDefault(require("../models/SocialLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getSocials = async (_req, res, next) => {
  try {
    const socials = await _SocialLinks.default.find().select('-__v').populate({
      path: 'image'
    });
    res.status(200).json(socials);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
};

exports.getSocials = getSocials;

const getSocialById = async (req, res, next) => {
  const {
    socialId
  } = req.params;
  if (!socialId.match(/^[0-9a-fA-F]{24}$/)) res.status(422).json({
    message: 'Please provide a valid id'
  });

  try {
    const socials = await _SocialLinks.default.findById(socialId).select('-__v');
    if (!socials) res.status(404).json({
      message: 'Could not find any social links'
    });
    res.status(200).json({
      socials
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
};

exports.getSocialById = getSocialById;

const addSocial = async (req, res, next) => {
  const errors = (0, _expressValidator.validationResult)(req);

  if (!errors.isEmpty()) {
    res.status(422).json({
      errorMessage: errors.array()[0].msg
    });
    return;
  }

  const {
    name,
    url
  } = req.body;

  try {
    const exists = await _SocialLinks.default.findOne({
      name
    });

    if (exists) {
      res.status(409).json({
        message: 'social media with this name already exists!'
      });
      return;
    }

    const socialLink = await _SocialLinks.default.create({
      name,
      url
    });
    res.status(201).json({
      message: 'Social media Created Successfully',
      socialLink
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
};

exports.addSocial = addSocial;

const editSocial = async (req, res, next) => {
  const {
    socialId
  } = req.params;
  const errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) res.status(422).json({
    errorMessage: errors.array()[0].msg
  });
  if (!socialId.match(/^[0-9a-fA-F]{24}$/)) res.status(422).json({
    message: 'Please provide a valid id'
  });

  try {
    const socials = await _SocialLinks.default.findById(socialId);

    if (!socials) {
      res.status(404).json({
        message: 'Could not find any band'
      });
      const error = new Error('Could not find any band');
      error.statusCode = 404;
      throw error;
    }

    const updatedSocial = await _SocialLinks.default.findByIdAndUpdate(socialId, req.body, {
      new: true
    });
    res.status(200).json({
      message: 'Social info updated!',
      updatedSocial
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
};

exports.editSocial = editSocial;

const deleteSocial = async (req, res, next) => {
  const {
    socialId
  } = req.params;
  if (!socialId.match(/^[0-9a-fA-F]{24}$/)) res.status(422).json({
    message: 'Please provide a valid id'
  });

  try {
    const social = await _SocialLinks.default.findById(socialId);

    if (!social) {
      res.status(404).json({
        message: 'Could not find any social media'
      });
      const error = new Error('Could not find any social media');
      error.statusCode = 404;
      throw error;
    }

    social.remove();
    res.status(200).json({
      message: 'Social media was deleted successfully'
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
};

exports.deleteSocial = deleteSocial;