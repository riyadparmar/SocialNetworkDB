const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  sUsername: { type: String, required: true, unique: true },
  sEmail: { type: String, required: true, unique: true },
  sPassword: { type: String, required: true },
  sProfilePicture: { type: String, default: '' },
  sBio: { type: String, default: '' },
  aFollowers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  aFollowing: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  bIsVerified: { type: Boolean, default: false },
  dLastLogin: { type: Date }
}, 
{
  timestamps: { createdAt: 'dCreatedAt', updatedAt: 'dUpdatedAt' }
});

module.exports = mongoose.model('User', userSchema);
