const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    visionBoard: { type: Schema.Types.ObjectId, ref: 'VisionBoard' },
  },
  {
    timestamps: true,
  }
)

const User = model('User', userSchema)

module.exports = User
