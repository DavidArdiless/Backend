const User = require('../models/User');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const createUser = async (request, response) => {
  const errors = validationResult(request);
  if(!errors.isEmpty()){
    return response.status(400).json({ errors: errors.array() })
  }

  try {
    const { firstName, lastName, email, password } = request.body;

    const newUser = new User({
      firstName,
      lastName,
      email,
      password
    })

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(password, salt)

    newUser.password = hash;

    await newUser.save()
    response.status(200).json({ message: 'User created successfully' })

  } catch (error) {
    response.status(500).json({ message: error.message })
  }
};

module.exports = { createUser };