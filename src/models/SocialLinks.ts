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
    }

  },
  { versionKey: false }
)

const SocialLinks = mongoose.model('SocialLink', socialLinkSchema)

export default SocialLinks
