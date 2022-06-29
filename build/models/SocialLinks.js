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
const socialLinkSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
}, {
  versionKey: false
});

const SocialLinks = _mongoose.default.model('SocialLinks', socialLinkSchema);

var _default = SocialLinks;
exports.default = _default;