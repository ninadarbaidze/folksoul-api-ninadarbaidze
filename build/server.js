"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mongo = _interopRequireDefault(require("./config/mongo"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _yamljs = _interopRequireDefault(require("yamljs"));

var _auth = _interopRequireDefault(require("./routes/auth"));

var _bandMembers = _interopRequireDefault(require("./routes/band-members"));

var _band = _interopRequireDefault(require("./routes/band"));

var _social = _interopRequireDefault(require("./routes/social"));

var _image = _interopRequireDefault(require("./routes/image"));

var _corsMiddleware = _interopRequireDefault(require("./middlewares/cors-middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = (0, _express.default)();

const swaggerDocument = _yamljs.default.load('./src/config/swagger.yaml'); // const fileStorage = multer.diskStorage({
//   destination: (_req, _file, cb) => {
//     cb(null, 'images');
//   },
//   filename: (_req, file, cb) => {
//     cb(null, new Date().toISOString() + '-' + file.originalname);
//   }
// });
// const fileFilter = (_req: any, file: any, cb: any) => {
//   if (
//     file.mimetype === 'image/png' ||
//     file.mimetype === 'image/jpg' ||
//     file.mimetype === 'image/jpeg'
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };


_dotenv.default.config();

server.use(_bodyParser.default.json()); // server.use(
//   multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
// );

server.use('/images', _express.default.static('images'));
(0, _mongo.default)();
server.use('/api-docs', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(swaggerDocument)); // server.use('/api-docs', swaggerMiddleware)

server.use(_corsMiddleware.default);
server.use(_auth.default);
server.use(_bandMembers.default);
server.use(_band.default);
server.use(_social.default);
server.use(_image.default);
const PORT = 3000;
server.listen(process.env.SERVER_PORT || 3000, () => console.log(`Server started at ${process.env.PROJECT_URL}`));