"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _socialController = require("../controllers/social-controller");

var _socialSchema = _interopRequireDefault(require("../schemas/social-schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router(); // add isAuth


router.get('/social-media/', _socialController.getSocials);
router.get('/social-media/:socialId', _socialController.getSocialById);
router.post('/add-social', (0, _socialSchema.default)(), _socialController.addSocial);
router.put('/edit-social/:socialId', (0, _socialSchema.default)(), _socialController.editSocial);
router.delete('/delete-social/', (0, _socialSchema.default)(), _socialController.deleteSocial); // router.post('/change-band-cover', validateBandMember(), changeMemberAvatar)

var _default = router;
exports.default = _default;