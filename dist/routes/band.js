"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const band_controller_1 = require("../controllers/band-controller");
const router = express_1.default.Router();
// add isAuth
router.get('/about-band/:bandId', band_controller_1.getBandById);
router.patch('/edit-band/:bandId', band_controller_1.editBand);
// router.post('/change-band-cover', validateBandMember(), changeMemberAvatar)
exports.default = router;
