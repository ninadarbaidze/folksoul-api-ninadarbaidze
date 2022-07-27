import prompt from 'prompt' 
import dotenv from 'dotenv'
import Band from 'models/Band'
import { connectMongoose } from 'config'

const schema = {
  properties: {
    _aboutBand: {
      required: true,
    },

  },
}
dotenv.config()

prompt.start()

prompt.get(schema, async (_, result) => {
  const mongoose = await connectMongoose()
  await Band.create({
    about: result._aboutBand,
  })
  console.log('Band Created')
  await mongoose.connection.close()
})
