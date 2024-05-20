const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  iSenderID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  iReceiverID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  sContent: { type: String, required: true },
  bRead: { type: Boolean, default: false },
  sSubject: { type: String, default: '' },
  bIsArchived: { type: Boolean, default: false },
},
{
  timestamps: { createdAt: 'dCreatedAt', updatedAt: 'dUpdatedAt' }
});

module.exports = messageSchema;