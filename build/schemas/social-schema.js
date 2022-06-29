"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressValidator = require("express-validator");

const validateSocials = () => [(0, _expressValidator.body)('name').notEmpty().withMessage('username field is required'), (0, _expressValidator.body)('url').notEmpty().withMessage('password field is required')];

var _default = validateSocials;
exports.default = _default;