const { Schema, model } = require('mongoose')

const folderSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }],
  },
  {
    timestamps: true,
  }
)

const Folder = model('Folder', folderSchema)

module.exports = Tab
