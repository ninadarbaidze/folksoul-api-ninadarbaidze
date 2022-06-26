"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const band_members_controller_1 = require("../controllers/band-members-controller");
const band_schema_1 = __importDefault(require("../schemas/band-schema"));
const router = express_1.default.Router();
// add isAuth
router.get('/band-member/:memberId', (0, band_schema_1.default)(), band_members_controller_1.getMemberById);
router.post('/new-member', (0, band_schema_1.default)(), band_members_controller_1.addNewMember);
router.patch('/edit-member/:memberId', (0, band_schema_1.default)(), band_members_controller_1.editMember);
router.delete('/delete-member', (0, band_schema_1.default)(), band_members_controller_1.deleteMember);
// router.post('/change-avatar', validateBandMember(), changeMemberAvatar)
exports.default = router;
