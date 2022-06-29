"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressValidator = require("express-validator");

const validateAuthorization = () => [(0, _expressValidator.body)('username').notEmpty().withMessage('username field is required').isLength({
  min: 3
}).withMessage('minimum 3 characters required'), (0, _expressValidator.body)('password').notEmpty().withMessage('password field is required').isLength({
  min: 3
}).withMessage('minimum 3 characters required')];

var _default = validateAuthorization;
exports.default = _default;