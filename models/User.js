const mongoose = require('mongoose');
const { Schema } = mongoose;
const CitySchema = require('./City');

const userSchema = new Schema({
  googleId: String,
  cities: [CitySchema],
  selectedCity: Number
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
