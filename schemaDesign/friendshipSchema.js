const mongoose = require('mongoose');

const friendshipSchema = new mongoose.Schema({
  iRequesterID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  iRecipientID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  sStatus: { type: String, enum: ['requested', 'accepted', 'declined'], default: 'requested' },
  dCreatedAt: { type: Date, default: Date.now },
  dUpdatedAt: { type: Date, default: Date.now }
},
{
  timestamps: { createdAt: 'dCreatedAt', updatedAt: 'dUpdatedAt' }
});

module.exports = friendshipSchema;
