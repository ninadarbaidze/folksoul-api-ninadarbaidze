"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _swaggerMiddleware = require("./middlewares/swagger-middleware");

var _mongo = _interopRequireDefault(require("./config/mongo"));

var _auth = _interopRequireDefault(require("./routes/auth"));

var _bandMembers = _interopRequireDefault(require("./routes/band-members"));

var _band = _interopRequireDefault(require("./routes/band"));

var _social = _interopRequireDefault(require("./routes/social"));

var _image = _interopRequireDefault(require("./routes/image"));

var _corsMiddleware = _interopRequireDefault(require("./middlewares/cors-middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = (0, _express.default)();

_dotenv.default.config();

server.use(_bodyParser.default.json());
server.use('/images', _express.default.static('images'));
(0, _mongo.default)();
server.use('/api-docs', (0, _swaggerMiddleware.swaggerMiddleware)());
server.use(_corsMiddleware.default);
server.use(_auth.default);
server.use(_bandMembers.default);
server.use(_band.default);
server.use(_social.default);
server.use(_image.default);
server.listen(process.env.SERVER_PORT || 3000, () => console.log(`Server started at ${process.env.PROJECT_URL}`));