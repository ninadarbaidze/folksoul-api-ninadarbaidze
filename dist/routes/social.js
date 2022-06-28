"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const social_controller_1 = require("../controllers/social-controller");
const social_schema_1 = __importDefault(require("../schemas/social-schema"));
const router = express_1.default.Router();
// add isAuth
router.get('/social-media/', social_controller_1.getSocials);
router.get('/social-media/:socialId', social_controller_1.getSocialById);
router.post('/add-social', (0, social_schema_1.default)(), social_controller_1.addSocial);
router.put('/edit-social/:socialId', (0, social_schema_1.default)(), social_controller_1.editSocial);
router.delete('/delete-social/', (0, social_schema_1.default)(), social_controller_1.deleteSocial);
// router.post('/change-band-cover', validateBandMember(), changeMemberAvatar)
exports.default = router;
