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
const userSchema = new Schema({
  username: Schema.Types.String,
  password: Schema.Types.String
}, {
  versionKey: false
});

const User = _mongoose.default.model('User', userSchema);

var _default = User;
exports.default = _default;