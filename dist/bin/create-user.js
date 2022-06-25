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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dotenv_1 = __importDefault(require("dotenv"));
const User_1 = __importDefault(require("../models/User"));
const mongo_1 = __importDefault(require("../config/mongo"));
const schema = {
    properties: {
        _username: {
            // pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            // message: 'Enter valid email',
            required: true,
        },
        _password: {
            hidden: true,
            required: true,
        },
    },
};
dotenv_1.default.config();
prompt_1.default.start();
prompt_1.default.get(schema, (_, result) => __awaiter(void 0, void 0, void 0, function* () {
    const mongoose = yield (0, mongo_1.default)();
    const password = result._password;
    const hashedPass = yield bcryptjs_1.default.hash(password, 12);
    yield User_1.default.create({
        username: result._username,
        password: hashedPass,
    });
    console.log('User Created');
    yield mongoose.connection.close();
}));
