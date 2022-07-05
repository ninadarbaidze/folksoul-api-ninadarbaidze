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
const BandImageSchema = new Schema({
  imageUrl: Schema.Types.String,
  bandId: {
    type: Schema.Types.ObjectId,
    ref: 'Band'
  }
}, {
  versionKey: false
});

const BandImages = _mongoose.default.model('BandImages', BandImageSchema);

var _default = BandImages;
exports.default = _default;