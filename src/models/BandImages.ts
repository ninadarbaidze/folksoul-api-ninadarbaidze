import mongoose from 'mongoose'

const { Schema } = mongoose

const BandImageSchema = new Schema(
  {
    imageUrl: Schema.Types.String,
    // bandId: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Band',
    // },
  },
  { versionKey: false }
)

const BandImages = mongoose.model('BandImages', BandImageSchema)

export default BandImages
