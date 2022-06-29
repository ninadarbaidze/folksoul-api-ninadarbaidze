"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bandMembersController = require("../controllers/band-members-controller");

var _bandSchema = _interopRequireDefault(require("../schemas/band-schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router(); // add isAuth


router.get('/band-members/', _bandMembersController.getMembers);
router.get('/band-member/:memberId', _bandMembersController.getMemberById);
router.post('/new-member', (0, _bandSchema.default)(), _bandMembersController.addNewMember);
router.patch('/edit-member/:memberId', (0, _bandSchema.default)(), _bandMembersController.editMember);
router.delete('/delete-member', (0, _bandSchema.default)(), _bandMembersController.deleteMember); // router.post('/change-avatar', validateBandMember(), changeMemberAvatar)

var _default = router;
exports.default = _default;