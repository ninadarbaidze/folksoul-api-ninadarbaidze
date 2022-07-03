import prompt from 'prompt' 
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import User from '../models/User'
import connectMongoose from '../config/mongo'

const schema = {
  properties: {
    _username: {
      required: true,
    },
    _password: {
      hidden: true,
      required: true,
    },
  },
}
dotenv.config()

prompt.start()

prompt.get(schema, async (_, result) => {
  const mongoose = await connectMongoose()
  const password: any = result._password
  const hashedPass = await bcrypt.hash(password, 12)
  await User.create({
    username: result._username,
    password: hashedPass,
  })
  console.log('User Created')
  await mongoose.connection.close()
})
