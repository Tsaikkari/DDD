const { Schema, model } = require('mongoose')

const visionBoardSchema = new Schema(
  {
    title: String,
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    images: [{ type: Schema.Types.ObjectId, ref: 'ImageBox' }],
  },
  {
    timestamps: true,
  }
)

const VisionBoard = model('VisionBoard', visionBoardSchema)

module.exports = VisionBoard
