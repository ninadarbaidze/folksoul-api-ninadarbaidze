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
const imageSchema = new Schema({
  imageUrl: Schema.Types.String,
  memberId: {
    type: Schema.Types.ObjectId,
    ref: 'BandMember'
  }
}, {
  versionKey: false
});

const Image = _mongoose.default.model('Image', imageSchema);

var _default = Image;
exports.default = _default;