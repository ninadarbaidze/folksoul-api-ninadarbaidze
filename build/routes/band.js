"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bandController = require("../controllers/band-controller");

var _authMiddleware = _interopRequireDefault(require("../middlewares/auth-middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router(); // add isAuth


router.get('/about-band/:bandId', _authMiddleware.default, _bandController.getBandById);
router.patch('/edit-band/:bandId', _authMiddleware.default, _bandController.editBand); // router.post('/change-band-cover', validateBandMember(), changeMemberAvatar)

var _default = router;
exports.default = _default;