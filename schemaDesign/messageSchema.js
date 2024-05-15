const mongoose = require('mongoose');

const messageSchema = new Schema({
  iSender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  iReceiver: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  sContent: { type: String, required: true },
  bRead: { type: Boolean, default: false },
  dCreatedAt: { type: Date, default: Date.now }
});

module.exports = messageSchema;
