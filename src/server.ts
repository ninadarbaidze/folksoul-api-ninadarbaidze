import express from 'express';
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import  {swaggerMiddleware} from './middlewares/swagger-middleware'
import connectMongoose from './config/mongo'
import SwaggerUI from 'swagger-ui-express'
import YAML from 'yamljs'
import authRoutes from './routes/auth'
import bandMemberRoutes from './routes/band-members'
import bandRoutes from './routes/band'
import socialRoutes from './routes/social'
import imageRoutes from './routes/image'
import corsMiddleware from './middlewares/cors-middleware'
import multer from 'multer'
import path from 'path'


const server = express();
const swaggerDocument = YAML.load('./src/config/swagger.yaml') as any

// const fileStorage = multer.diskStorage({
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


dotenv.config()
server.use(bodyParser.json())

// server.use(
//   multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
// );
server.use('/images', express.static('images'));
connectMongoose()
server.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(swaggerDocument))
// server.use('/api-docs', swaggerMiddleware)

server.use(corsMiddleware)

server.use(authRoutes)
server.use(bandMemberRoutes)
server.use(bandRoutes)
server.use(socialRoutes)
server.use(imageRoutes)

const PORT = 3000;

server.listen(process.env.SERVER_PORT || 3000, () =>
  console.log(`Server started at ${process.env.PROJECT_URL}`)
)

