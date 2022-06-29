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
const brandSchema = new Schema({
  about: {
    type: String,
    required: true
  }
}, {
  versionKey: false
});

const Band = _mongoose.default.model('Band', brandSchema);

var _default = Band;
exports.default = _default;