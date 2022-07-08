"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBand = exports.editBand = void 0;

var _expressValidator = require("express-validator");

var _Band = _interopRequireDefault(require("../models/Band"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getBand = async (_req, res, next) => {
  try {
    const band = await _Band.default.find().select('-__v').populate({
      path: 'image'
    });
    res.status(200).json(band[0]);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
};

exports.getBand = getBand;

const editBand = async (req, res, next) => {
  const {
    bandId
  } = req.params;
  const errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) res.status(422).json({
    errorMessage: errors.array()[0].msg
  });
  if (!bandId.match(/^[0-9a-fA-F]{24}$/)) res.status(422).json({
    message: 'Please provide a valid id'
  });

  try {
    const band = await _Band.default.findById(bandId);

    if (!band) {
      res.status(404).json({
        message: 'Could not find any band'
      });
      const error = new Error('Could not find any band');
      error.statusCode = 404;
      throw error;
    }

    const updatedBand = await _Band.default.findByIdAndUpdate(bandId, req.body, {
      new: true
    });
    res.status(200).json({
      message: 'Band info updated!',
      updatedBand
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
};

exports.editBand = editBand;