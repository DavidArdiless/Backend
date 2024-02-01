const { User } = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const loginUser = async (request, response) => {
  try {
    const { email, password } = request.body;

    const user = await User.findOne({ email })
    if(!user) return response.status(400).json({ message: 'User does not exists' });

    const isMatch = bcrypt.compareSync(password, user.password);
    if(!isMatch) return response.status(400).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: user._id, firstName: user.firstName, lastName: user.lastName }, process.env.SECRET_TOKEN_KEY)

    response.status(200).json({ token, user })
  } catch (error) {
    response.status(500).json({ message: error.message, mensaje: 'error en authController' })
  }
}

module.exports = { loginUser }