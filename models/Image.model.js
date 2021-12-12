const { Schema, model } = require('mongoose')

const imageSchema = new Schema(
  {
    imgPath: {
      type: String,
      trim: true,
    },
    text: String,
    visionBoard: { type: Schema.Types.ObjectId, ref: 'VisionBoard' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
)

const Image = model('Image', imageSchema)

module.exports = Image
