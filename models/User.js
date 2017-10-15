const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

userSchema
  .virtual('name')
  .get(function() {
    return this._name;
  })
  .set(function(v) {
    this._name = v;
  });

const User = mongoose.model('users', userSchema);

module.exports = User;
