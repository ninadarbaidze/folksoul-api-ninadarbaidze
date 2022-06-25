import SwaggerUI from 'swagger-ui-express'
import YAML from 'yamljs'

export const swaggerMiddleware = () => {
  const specifications = {
    customSiteTitle: 'Admin Panel API',
  }
  const swaggerDocument = YAML.load('./src/config/swagger.yaml') as any
  return [SwaggerUI.serve, SwaggerUI.setup(swaggerDocument, specifications)]
}

