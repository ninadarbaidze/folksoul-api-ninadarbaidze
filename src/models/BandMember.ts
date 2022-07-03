import mongoose, { SchemaTypes } from 'mongoose'

const { Schema } = mongoose

const brandMemberSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    instrument:  {
      type: String,
      required: true
    },
    orbitLength:  {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    biography: {
      type: String,
      required: true
    },
    image: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Image'
      }
    ]

  },
  { versionKey: false }
)

const BandMember = mongoose.model('BandMember', brandMemberSchema)

export default BandMember
