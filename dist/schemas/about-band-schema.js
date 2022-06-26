"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validateBand = () => [
    (0, express_validator_1.body)('about')
        .notEmpty()
        .withMessage('about field is required')
];
exports.default = validateBand;
