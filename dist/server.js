"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongo_1 = __importDefault(require("./config/mongo"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const auth_1 = __importDefault(require("./routes/auth"));
const band_members_1 = __importDefault(require("./routes/band-members"));
const server = (0, express_1.default)();
const swaggerDocument = yamljs_1.default.load('./src/config/swagger.yaml');
dotenv_1.default.config();
server.use(body_parser_1.default.json());
(0, mongo_1.default)();
server.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
// server.use('/api-docs', swaggerMiddleware)
server.use(auth_1.default);
server.use(band_members_1.default);
const PORT = 3000;
server.listen(process.env.SERVER_PORT || 3000, () => console.log(`Server started at ${process.env.PROJECT_URL}`));