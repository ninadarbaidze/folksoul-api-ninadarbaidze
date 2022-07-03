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
const brandMemberSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  instrument: {
    type: String,
    required: true
  },
  orbitLength: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  biography: {
    type: String,
    required: true
  },
  image: [{
    type: Schema.Types.ObjectId,
    ref: 'Image'
  }]
}, {
  versionKey: false
});

const BandMember = _mongoose.default.model('BandMember', brandMemberSchema);

var _default = BandMember;
exports.default = _default;