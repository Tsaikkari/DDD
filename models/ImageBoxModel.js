const { Schema, model } = require('mongoose')

const imageBoxSchema = new Schema(
  {
    imgPath: {
      type: String,
      trim: true,
    },
    text: String,
    visionBoard: { type: Schema.Types.ObjectId, ref: 'VisionBoard' },
  },
  {
    timestamps: true,
  }
)

const ImageBox = model('ImageBox', imageBoxSchema)

module.exports = ImageBox
