import prompt from 'prompt' 
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import Band from '../models/Band'
import connectMongoose from '../config/mongo'

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
