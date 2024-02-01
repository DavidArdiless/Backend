const { model, Schema } = require('mongoose');

const user = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
})

const User = model('User', user);
module.exports = { User }