const { Router } = require('express');
const route = Router();
const { body } = require('express-validator');
const { createUser } = require('../controllers/usersController');

route.post('/users', 
  body('firstName').trim().notEmpty().withMessage('First Name must not be empty').isLength({ min: 5, max: 20 }).withMessage('First Name needs a minimum of 5 letters and a maximum of 20'),
  body('lastName').trim().notEmpty().withMessage('Last Name must not be empty').isLength({ min: 5, max: 20 }).withMessage('Last Name needs a minimum of 5 letters and a maximum of 20'),
  body('email').trim().notEmpty().withMessage('Email must not be empty').isEmail().withMessage('Must be a valid email').isLength({ min: 10 }).withMessage('Email must contain at least 10 characters'),
  body('password').trim().notEmpty().withMessage('Password must not be empty').isLength({ min: 5, max: 20 }).withMessage('Password must contain at least 10 characters'), createUser)

module.exports = route;