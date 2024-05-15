const mongoose = require('mongoose');

const friendshipSchema = new Schema({
  iRequester: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  iRecipient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  sStatus: { type: String, enum: ['requested', 'accepted', 'declined'], default: 'requested' },
  dCreatedAt: { type: Date, default: Date.now }
});

module.exports = friendshipSchema;
