import mongoose from 'mongoose'

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
    image: {
        type: String,
        
      }
    

  },
  { versionKey: false }
)

const SocialLinks = mongoose.model('SocialLinks', socialLinkSchema)

export default SocialLinks
