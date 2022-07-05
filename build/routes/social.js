"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _socialController = require("../controllers/social-controller");

var _socialSchema = _interopRequireDefault(require("../schemas/social-schema"));

var _authMiddleware = _interopRequireDefault(require("../middlewares/auth-middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/social-media/', _socialController.getSocials);
router.get('/social-media/:socialId', _socialController.getSocialById);
router.post('/add-social', _authMiddleware.default, (0, _socialSchema.default)(), _socialController.addSocial);
router.patch('/edit-social/:socialId', _authMiddleware.default, (0, _socialSchema.default)(), _socialController.editSocial);
router.delete('/delete-social/:socialId', _authMiddleware.default, (0, _socialSchema.default)(), _socialController.deleteSocial);
var _default = router;
exports.default = _default;