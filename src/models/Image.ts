import mongoose from 'mongoose'

const { Schema } = mongoose

const imageSchema = new Schema(
  {
    imageUrl: Schema.Types.String,
    memberId: {
      type: Schema.Types.ObjectId,
      ref: 'BandMember',
    },
  },
  { versionKey: false }
)

const Image = mongoose.model('Image', imageSchema)

export default Image
