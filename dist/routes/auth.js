"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controllers/auth-controller");
const auth_schema_1 = __importDefault(require("../schemas/auth-schema"));
const router = express_1.default.Router();
router.post('/auth', (0, auth_schema_1.default)(), auth_controller_1.login);
exports.default = router;
