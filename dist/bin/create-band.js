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
const prompt_1 = __importDefault(require("prompt"));
const dotenv_1 = __importDefault(require("dotenv"));
const Band_1 = __importDefault(require("../models/Band"));
const mongo_1 = __importDefault(require("../config/mongo"));
const schema = {
    properties: {
        _aboutBand: {
            required: true,
        },
    },
};
dotenv_1.default.config();
prompt_1.default.start();
prompt_1.default.get(schema, (_, result) => __awaiter(void 0, void 0, void 0, function* () {
    const mongoose = yield (0, mongo_1.default)();
    yield Band_1.default.create({
        about: result._aboutBand,
    });
    console.log('Band Created');
    yield mongoose.connection.close();
}));
