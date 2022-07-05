"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _imageControllers = require("../controllers/image-controllers");

var _multer = _interopRequireDefault(require("multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const storageConfig = _multer.default.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, 'images');
  },
  filename: function (_req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = (0, _multer.default)({
  storage: storageConfig
});

const router = _express.default.Router();

router.post('/change-avatar', upload.single('image'), _imageControllers.changeMemberAvatar);
router.post('/change-social-icon', upload.single('image'), _imageControllers.changeSocialIcon);
router.post('/change-band-logo', upload.single('image'), _imageControllers.changeBandLogo);
var _default = router;
exports.default = _default;