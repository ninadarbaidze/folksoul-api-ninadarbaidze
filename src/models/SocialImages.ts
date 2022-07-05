import mongoose from 'mongoose'

const { Schema } = mongoose

const SocialImageSchema = new Schema(
  {
    imageUrl: Schema.Types.String,
    socialId: {
      type: Schema.Types.ObjectId,
      ref: 'SocialLinks',
    },
  },
  { versionKey: false }
)

const SocialImages = mongoose.model('SocialImages', SocialImageSchema)

export default SocialImages
