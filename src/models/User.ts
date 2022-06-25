import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema(
  {
    username: Schema.Types.String,
    password: Schema.Types.String,
  },
  { versionKey: false }
)

const User = mongoose.model('User', userSchema)

export default User
