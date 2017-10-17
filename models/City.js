const mongoose = require('mongoose');
const { Schema } = mongoose;

const citySchema = new Schema({
  cityId: Number
});

module.exports = citySchema;
