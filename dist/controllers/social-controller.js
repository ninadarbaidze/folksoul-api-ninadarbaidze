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
exports.deleteSocial = exports.editSocial = exports.addSocial = exports.getSocialById = exports.getSocials = void 0;
const express_validator_1 = require("express-validator");
const Band_1 = __importDefault(require("../models/Band"));
const getSocials = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const socials = yield Band_1.default.find()
            .select('-__v');
        res.status(200).json(socials);
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
});
exports.getSocials = getSocials;
const getSocialById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { socialId } = req.params;
    if (!socialId.match(/^[0-9a-fA-F]{24}$/))
        res.status(422).json({ message: 'Please provide a valid id' });
    try {
        const socials = yield Band_1.default.findById(socialId)
            .select('-__v');
        if (!socials)
            res.status(404).json({ message: 'Could not find any social links' });
        res.status(200).json({
            socials,
        });
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
});
exports.getSocialById = getSocialById;
const addSocial = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errorMessage: errors.array()[0].msg });
        return;
    }
    const { name, url } = req.body;
    try {
        const exists = yield Band_1.default.findOne({ name });
        if (exists) {
            res.status(409).json({
                message: 'social media with this name already exists!',
            });
            return;
        }
        const brandMember = yield Band_1.default.create({
            name,
            url
        });
        res.status(201).json({
            message: 'Social media Created Successfully',
            brandMember,
        });
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
});
exports.addSocial = addSocial;
const editSocial = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { socialId } = req.params;
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty())
        res.status(422).json({ errorMessage: errors.array()[0].msg });
    if (!socialId.match(/^[0-9a-fA-F]{24}$/))
        res.status(422).json({ message: 'Please provide a valid id' });
    try {
        const socials = yield Band_1.default.findById(socialId);
        if (!socials) {
            res.status(404).json({ message: 'Could not find any band' });
            const error = new Error('Could not find any band');
            error.statusCode = 404;
            throw error;
        }
        const updatedSocial = yield Band_1.default.findByIdAndUpdate(socialId, req.body, {
            new: true,
        });
        res.status(200).json({ message: 'Social info updated!', updatedSocial });
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
});
exports.editSocial = editSocial;
const deleteSocial = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { socialId } = req.body;
    if (!socialId.match(/^[0-9a-fA-F]{24}$/))
        res.status(422).json({ message: 'Please provide a valid id' });
    try {
        const social = yield Band_1.default.findById(socialId);
        if (!social) {
            res.status(404).json({ message: 'Could not find any social media' });
            const error = new Error('Could not find any social media');
            error.statusCode = 404;
            throw error;
        }
        social.remove();
        res.status(200).json({ message: 'Social media was deleted successfully' });
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
});
exports.deleteSocial = deleteSocial;
