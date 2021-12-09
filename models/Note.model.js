const { Schema, model } = require('mongoose')

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    tab: { type: Schema.Types.ObjectId, ref: 'Tab' },
  },
  {
    timestamps: true,
  }
)

const Note = model('Note', noteSchema)

module.exports = Note
