const mongoose = require('mongoose');

const postSchema = new Schema({
  iUser: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  sContent: { type: String, required: true },
  sImage: { type: String, default: '' },
  aLikes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  dCreatedAt: { type: Date, default: Date.now }
});

module.exports = postSchema;
