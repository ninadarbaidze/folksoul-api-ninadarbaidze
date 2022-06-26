import mongoose, { SchemaTypes } from 'mongoose'

const { Schema } = mongoose

const brandSchema = new Schema(
  {
    about: {
      type: String,
      required: true
    }

  },
  { versionKey: false }
)

const Band = mongoose.model('Band', brandSchema)

export default Band
