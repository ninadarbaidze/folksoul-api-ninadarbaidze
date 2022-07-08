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

const server = express();
const swaggerDocument = YAML.load('./src/config/swagger.yaml') as any

dotenv.config()
server.use(bodyParser.json())



server.use('/images', express.static('images'));
connectMongoose()
server.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(swaggerDocument))
server.use('/api-docs', swaggerMiddleware)

server.use(corsMiddleware)

server.use(authRoutes)
server.use(bandMemberRoutes)
server.use(bandRoutes)
server.use(socialRoutes)
server.use(imageRoutes)

server.listen(process.env.SERVER_PORT || 3000, () =>
  console.log(`Server started at ${process.env.PROJECT_URL}`)
)

