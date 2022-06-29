"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isConnectedToLocalDatabase = () => process.env.MONGO_PROTOCOL === 'mongodb';

const useLocalMongoDbUrl = () => {
  const {
    MONGO_PROTOCOL,
    MONGO_HOST,
    MONGO_PORT,
    MONGO_DATABASE
  } = process.env;
  return `${MONGO_PROTOCOL}://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;
};

const useAtlasMongoDbUrl = () => {
  const {
    MONGO_PROTOCOL,
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_HOST,
    MONGO_DATABASE
  } = process.env;
  return `${MONGO_PROTOCOL}://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASE}`;
};

const connect = async () => {
  try {
    const mongooseURL = isConnectedToLocalDatabase() ? useLocalMongoDbUrl() : useAtlasMongoDbUrl();
    return _mongoose.default.connect(mongooseURL);
  } catch (err) {
    throw new Error(err.message);
  }
};

var _default = connect;
exports.default = _default;