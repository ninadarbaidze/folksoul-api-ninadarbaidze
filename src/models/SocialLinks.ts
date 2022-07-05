import mongoose, { SchemaTypes } from 'mongoose'

const { Schema } = mongoose

const socialLinkSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    url:  {
      type: String,
      required: true
    },
    image: [
      {
        type: Schema.Types.ObjectId,
        ref: 'SocialImages'
      }
    ]

  },
  { versionKey: false }
)

const SocialLinks = mongoose.model('SocialLinks', socialLinkSchema)

export default SocialLinks
