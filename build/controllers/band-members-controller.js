"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMembers = exports.getMemberById = exports.editMember = exports.deleteMember = exports.addNewMember = void 0;

var _expressValidator = require("express-validator");

var _BandMember = _interopRequireDefault(require("../models/BandMember"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getMembers = async (req, res, next) => {
  const PAGE_SIZE = 3;
  const page = parseInt(req.query.page || '0');
  let bandMembers;

  try {
    if (req.query.page) {
      bandMembers = await _BandMember.default.find().select('-__v').populate({
        path: 'image'
      }).limit(PAGE_SIZE).skip(PAGE_SIZE * page);
      const total = await _BandMember.default.countDocuments();
      res.status(200).json({
        bandMembers,
        total: Math.ceil(total / PAGE_SIZE)
      });
    } else {
      bandMembers = await _BandMember.default.find().select('-__v').sort({
        'orbitLength': 'descending'
      }).populate({
        path: 'image'
      });
      res.status(200).json(bandMembers);
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
};

exports.getMembers = getMembers;

const getMemberById = async (req, res, next) => {
  const {
    memberId
  } = req.params;
  if (!memberId.match(/^[0-9a-fA-F]{24}$/)) res.status(422).json({
    message: 'Please provide a valid id'
  });

  try {
    const bandMember = await _BandMember.default.findById(memberId).select('-__v');
    if (!bandMember) res.status(404).json({
      message: 'Could not find any band member'
    });
    res.status(200).json({
      bandMember
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
};

exports.getMemberById = getMemberById;

const addNewMember = async (req, res, next) => {
  const errors = (0, _expressValidator.validationResult)(req);

  if (!errors.isEmpty()) {
    res.status(422).json({
      errorMessage: errors.array()[0].msg
    });
    return;
  }

  const {
    name,
    instrument,
    orbitLength,
    color,
    biography
  } = req.body;

  try {
    const exists = await _BandMember.default.findOne({
      name
    });

    if (exists) {
      res.status(409).json({
        message: 'Band member with this name already exists!'
      });
      return;
    }

    const brandMember = await _BandMember.default.create({
      name,
      instrument,
      orbitLength,
      color,
      biography
    });
    res.status(201).json({
      message: 'Band member Created Successfully',
      brandMember
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
};

exports.addNewMember = addNewMember;

const editMember = async (req, res, next) => {
  const {
    memberId
  } = req.params;
  const errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) res.status(422).json({
    errorMessage: errors.array()[0].msg
  });
  if (!memberId.match(/^[0-9a-fA-F]{24}$/)) res.status(422).json({
    message: 'Please provide a valid id'
  });

  try {
    const bandMember = await _BandMember.default.findById(memberId);

    if (!bandMember) {
      res.status(404).json({
        message: 'Could not find any band member'
      });
      const error = new Error('Could not find any band member');
      error.statusCode = 404;
      throw error;
    }

    const updatedBandMember = await _BandMember.default.findByIdAndUpdate(memberId, req.body, {
      new: true
    });
    res.status(200).json({
      message: 'Band member updated!',
      updatedBandMember
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
};

exports.editMember = editMember;

const deleteMember = async (req, res, next) => {
  const {
    memberId
  } = req.params;
  if (!memberId.match(/^[0-9a-fA-F]{24}$/)) res.status(422).json({
    message: 'Please provide a valid id'
  });

  try {
    const bandMember = await _BandMember.default.findById(memberId);

    if (!bandMember) {
      res.status(404).json({
        message: 'Could not find any band member'
      });
      const error = new Error('Could not find any band member');
      error.statusCode = 404;
      throw error;
    }

    bandMember.remove();
    res.status(200).json({
      message: 'Band member was deleted successfully'
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
};

exports.deleteMember = deleteMember;