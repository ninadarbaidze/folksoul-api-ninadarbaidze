"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bandMembersController = require("../controllers/band-members-controller");

var _bandSchema = _interopRequireDefault(require("../schemas/band-schema"));

var _authMiddleware = _interopRequireDefault(require("../middlewares/auth-middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/band-members/', _bandMembersController.getMembers);
router.get('/band-member/:memberId', _authMiddleware.default, _bandMembersController.getMemberById);
router.post('/new-member', _authMiddleware.default, (0, _bandSchema.default)(), _bandMembersController.addNewMember);
router.patch('/edit-member/:memberId', _authMiddleware.default, (0, _bandSchema.default)(), _bandMembersController.editMember);
router.delete('/delete-member/:memberId', _authMiddleware.default, (0, _bandSchema.default)(), _bandMembersController.deleteMember);
var _default = router;
exports.default = _default;