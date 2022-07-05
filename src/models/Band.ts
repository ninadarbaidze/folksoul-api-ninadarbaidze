import mongoose, { SchemaTypes } from 'mongoose'

const { Schema } = mongoose

const brandSchema = new Schema(
  {
    about: {
      type: String,
      required: true
    },
    image: [
      {
        type: Schema.Types.ObjectId,
        ref: 'BandImages'
      }
    ]

  },
  { versionKey: false }
)

const Band = mongoose.model('Band', brandSchema)

export default Band
