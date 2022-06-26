"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validateBandMember = () => [
    (0, express_validator_1.body)('name')
        .notEmpty()
        .withMessage('name field is required')
        .isLength({ min: 3 })
        .withMessage('minimum 3 characters required'),
    (0, express_validator_1.body)('instrument')
        .notEmpty()
        .withMessage('instrument field is required')
        .isLength({ min: 2 })
        .withMessage('minimum 2 characters required'),
    (0, express_validator_1.body)('orbitLength')
        .notEmpty()
        .withMessage('orbitLength field is required')
        .isLength({ min: 2 })
        .withMessage('minimum 2 characters required')
        .isNumeric()
        .withMessage('please enter only numbers'),
    (0, express_validator_1.body)('color')
        .notEmpty()
        .withMessage('color field is required')
        .matches(/^#(?:[0-9A-F]{3}){1,2}$/)
        .withMessage('color format is invalid'),
    (0, express_validator_1.body)('biography')
        .notEmpty()
        .withMessage('biography field is required')
];
exports.default = validateBandMember;
