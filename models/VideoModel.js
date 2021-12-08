const { Schema, model } = require('mongoose')

const videoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    videoPath: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const Video = model('Video', videoSchema)

module.exports = Video
