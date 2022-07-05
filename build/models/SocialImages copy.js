"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Schema
} = _mongoose.default;
const SocialImageSchema = new Schema({
  imageUrl: Schema.Types.String,
  socialId: {
    type: Schema.Types.ObjectId,
    ref: 'SocialLinks'
  }
}, {
  versionKey: false
});

const SocialImages = _mongoose.default.model('SocialImages', SocialImageSchema);

var _default = SocialImages;
exports.default = _default;