const mongoose = require('mongoose');

const commentSchema = new Schema({
  iUser: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  iPost: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  sContent: { type: String, required: true },
  dCreatedAt: { type: Date, default: Date.now }
});

module.exports = commentSchema;
