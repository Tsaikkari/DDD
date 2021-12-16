const { Schema, model } = require('mongoose')

const youTubeSchema = new Schema(
  {
    request: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const YouTube = model('YouTube', youTubeSchema)

module.exports = YouTube
