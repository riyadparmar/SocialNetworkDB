const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  iUserID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  sContent: { type: String, required: true },
  sImage: { type: String, default: '' },
  aLikes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  nCommentsCount: { type: Number, default: 0 },
  nLikesCount: { type: Number, default: 0 },
  bIsEdited: { type: Boolean, default: false },
},
{
  timestamps: { createdAt: 'dCreatedAt', updatedAt: 'dUpdatedAt' }
});

module.exports = postSchema;

