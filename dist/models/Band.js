"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const brandSchema = new Schema({
    about: {
        type: String,
        required: true
    }
}, { versionKey: false });
const Band = mongoose_1.default.model('Band', brandSchema);
exports.default = Band;
