"use strict";

var _prompt = _interopRequireDefault(require("prompt"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _User = _interopRequireDefault(require("../models/User"));

var _mongo = _interopRequireDefault(require("../config/mongo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = {
  properties: {
    _username: {
      required: true
    },
    _password: {
      hidden: true,
      required: true
    }
  }
};

_dotenv.default.config();

_prompt.default.start();

_prompt.default.get(schema, async (_, result) => {
  const mongoose = await (0, _mongo.default)();
  const password = result._password;
  const hashedPass = await _bcryptjs.default.hash(password, 12);
  await _User.default.create({
    username: result._username,
    password: hashedPass
  });
  console.log('User Created');
  await mongoose.connection.close();
});