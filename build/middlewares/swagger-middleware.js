"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swaggerMiddleware = void 0;

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _yamljs = _interopRequireDefault(require("yamljs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const swaggerMiddleware = () => {
  const specifications = {
    customSiteTitle: 'Inside Joke API'
  };

  const swaggerDocument = _yamljs.default.load('./src/config/swagger.yaml');

  return [_swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(swaggerDocument, specifications)];
};

exports.swaggerMiddleware = swaggerMiddleware;