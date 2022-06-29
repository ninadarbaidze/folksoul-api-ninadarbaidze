"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _expressValidator = require("express-validator");

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const login = async (req, res, next) => {
  const {
    username,
    password
  } = req.body;
  const errors = (0, _expressValidator.validationResult)(req);

  if (!errors.isEmpty()) {
    res.status(422).json({
      errorMessage: errors.array()[0].msg
    });
  }

  try {
    const user = await _User.default.findOne({
      username
    });
    if (!user) res.status(401).json({
      errorMessage: 'Please provide correct credentials'
    });
    const isEqual = await _bcryptjs.default.compare(password, user.password);

    if (!isEqual) {
      res.status(401).json({
        errorMessage: 'Please provide correct credentials'
      });
      const error = new Error('Please provide correct credentials');
      error.statusCode = 401;
      throw error;
    }

    const token = _jsonwebtoken.default.sign({
      username: user.username
    }, 'seriouslysupersecret', {
      expiresIn: '2h'
    });

    res.status(200).json({
      token
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
};

exports.login = login;