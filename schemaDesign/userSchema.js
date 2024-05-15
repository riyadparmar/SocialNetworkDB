const mongoose = require('mongoose');

const userSchema = new Schema({
  sUsername: { type: String, required: true, unique: true },
  sEmail: { type: String, required: true, unique: true },
  sPassword: { type: String, required: true },
  sProfilePicture: { type: String, default: '' },
  sBio: { type: String, default: '' },
  dCreatedAt: { type: Date, default: Date.now }
});

module.exports = userSchema;
