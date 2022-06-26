"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editBand = exports.getBandById = void 0;
const express_validator_1 = require("express-validator");
const Band_1 = __importDefault(require("../models/Band"));
const getBandById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { bandId } = req.params;
    if (!bandId.match(/^[0-9a-fA-F]{24}$/))
        res.status(422).json({ message: 'Please provide a valid id' });
    try {
        const bandMember = yield Band_1.default.findById(bandId)
            .select('-__v');
        if (!bandMember)
            res.status(404).json({ message: 'Could not find any band member' });
        res.status(200).json({
            bandMember,
        });
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
});
exports.getBandById = getBandById;
const editBand = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { bandId } = req.params;
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty())
        res.status(422).json({ errorMessage: errors.array()[0].msg });
    if (!bandId.match(/^[0-9a-fA-F]{24}$/))
        res.status(422).json({ message: 'Please provide a valid id' });
    try {
        const bandMember = yield Band_1.default.findById(bandId);
        if (!bandMember) {
            res.status(404).json({ message: 'Could not find any band' });
            const error = new Error('Could not find any band');
            error.statusCode = 404;
            throw error;
        }
        const updatedBandMember = yield Band_1.default.findByIdAndUpdate(bandId, req.body, {
            new: true,
        });
        res.status(200).json({ message: 'Band info updated!', updatedBandMember });
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
});
exports.editBand = editBand;
