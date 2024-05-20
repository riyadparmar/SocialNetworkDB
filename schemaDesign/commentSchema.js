const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  iUserID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  iPost: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  sContent: { type: String, required: true },
  nLikesCount: { type: Number, default: 0 },
  dCreatedAt: { type: Date, default: Date.now }
},
{
  timestamps: { createdAt: 'dCreatedAt', updatedAt: 'dUpdatedAt' }
});

module.exports = commentSchema;
