"use strict";

var _prompt = _interopRequireDefault(require("prompt"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _Band = _interopRequireDefault(require("../models/Band"));

var _mongo = _interopRequireDefault(require("../config/mongo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = {
  properties: {
    _aboutBand: {
      required: true
    }
  }
};

_dotenv.default.config();

_prompt.default.start();

_prompt.default.get(schema, async (_, result) => {
  const mongoose = await (0, _mongo.default)();
  await _Band.default.create({
    about: result._aboutBand
  });
  console.log('Band Created');
  await mongoose.connection.close();
});