"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validateAuthorization = () => [
    (0, express_validator_1.body)('username')
        .notEmpty()
        .withMessage('username field is required')
        .isLength({ min: 3 })
        .withMessage('minimum 3 characters required'),
    (0, express_validator_1.body)('password')
        .notEmpty()
        .withMessage('password field is required')
        .isLength({ min: 3 })
        .withMessage('minimum 3 characters required')
];
exports.default = validateAuthorization;
