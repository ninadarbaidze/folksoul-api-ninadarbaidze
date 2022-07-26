import mongoose from 'mongoose'

const { Schema } = mongoose

const brandSchema = new Schema(
  {
    about: {
      type: String,
      required: true
    },
    image: 
      {
        type: String,
      }
    

  },
  { versionKey: false }
)

const Band = mongoose.model('Band', brandSchema)

export default Band
