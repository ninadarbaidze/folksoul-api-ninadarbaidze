"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressValidator = require("express-validator");

const validateBand = () => [(0, _expressValidator.body)('about').notEmpty().withMessage('about field is required')];

var _default = validateBand;
exports.default = _default;