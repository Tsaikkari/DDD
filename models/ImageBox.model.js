const { Schema, model } = require('mongoose')

const imageBoxSchema = new Schema(
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

const ImageBox = model('ImageBox', imageBoxSchema)

module.exports = ImageBox
