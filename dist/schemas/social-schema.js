"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validateSocials = () => [
    (0, express_validator_1.body)('name')
        .notEmpty()
        .withMessage('username field is required'),
    (0, express_validator_1.body)('url')
        .notEmpty()
        .withMessage('password field is required')
];
exports.default = validateSocials;
