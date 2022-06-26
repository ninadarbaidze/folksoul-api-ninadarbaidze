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
exports.deleteMember = exports.editMember = exports.addNewMember = exports.getMemberById = void 0;
const express_validator_1 = require("express-validator");
const BandMember_1 = __importDefault(require("../models/BandMember"));
const getMemberById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    if (!memberId.match(/^[0-9a-fA-F]{24}$/))
        res.status(422).json({ message: 'Please provide a valid id' });
    try {
        const bandMember = yield BandMember_1.default.findById(memberId)
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
exports.getMemberById = getMemberById;
const addNewMember = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errorMessage: errors.array()[0].msg });
        return;
    }
    const { name, instrument, orbitLength, color, biography } = req.body;
    try {
        const exists = yield BandMember_1.default.findOne({ name });
        if (exists) {
            res.status(409).json({
                message: 'Band member with this name already exists!',
            });
            return;
        }
        const brandMember = yield BandMember_1.default.create({
            name,
            instrument,
            orbitLength,
            color,
            biography
        });
        res.status(201).json({
            message: 'Band member Created Successfully',
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
exports.addNewMember = addNewMember;
const editMember = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty())
        res.status(422).json({ errorMessage: errors.array()[0].msg });
    if (!memberId.match(/^[0-9a-fA-F]{24}$/))
        res.status(422).json({ message: 'Please provide a valid id' });
    try {
        const bandMember = yield BandMember_1.default.findById(memberId);
        if (!bandMember) {
            res.status(404).json({ message: 'Could not find any band member' });
            const error = new Error('Could not find any band member');
            error.statusCode = 404;
            throw error;
        }
        const updatedBandMember = yield BandMember_1.default.findByIdAndUpdate(memberId, req.body, {
            new: true,
        });
        res.status(200).json({ message: 'Band member updated!', updatedBandMember });
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
});
exports.editMember = editMember;
const deleteMember = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id.match(/^[0-9a-fA-F]{24}$/))
        res.status(422).json({ message: 'Please provide a valid id' });
    try {
        const bandMember = yield BandMember_1.default.findById(id);
        if (!bandMember) {
            res.status(404).json({ message: 'Could not find any band member' });
            const error = new Error('Could not find any band member');
            error.statusCode = 404;
            throw error;
        }
        bandMember.remove();
        res.status(200).json({ message: 'Band member was deleted successfully' });
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
});
exports.deleteMember = deleteMember;
