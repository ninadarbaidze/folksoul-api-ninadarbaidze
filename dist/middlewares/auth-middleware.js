"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        res.status(403).json({ message: 'Forbidden' });
        const error = new Error('Forbidden');
        error.statusCode = 403;
        throw error;
    }
    const token = authHeader.split(' ')[1];
    const isTokenExpired = (tok) => Date.now() >=
        JSON.parse(Buffer.from(tok.split('.')[1], 'base64').toString()).exp * 1000;
    if (isTokenExpired(token)) {
        res.status(401).json({ message: 'Your Token is Expired' });
    }
    let decodedToken;
    try {
        decodedToken = jsonwebtoken_1.default.verify(token, 'seriouslysupersecret');
    }
    catch (err) {
        err.statusCode = 500;
        throw err;
    }
    if (!decodedToken) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
    }
    next();
};
exports.default = authMiddleware;
