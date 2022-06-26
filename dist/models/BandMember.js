"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const brandMemberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    instrument: {
        type: String,
        required: true
    },
    orbitLength: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    biography: {
        type: String,
        required: true
    }
}, { versionKey: false });
const BandMember = mongoose_1.default.model('BandMember', brandMemberSchema);
exports.default = BandMember;
