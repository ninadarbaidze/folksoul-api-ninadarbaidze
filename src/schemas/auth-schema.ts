import { body } from 'express-validator'

const validateAuthorization = () => [
  body('username')
    .notEmpty()
    .withMessage('username field is required')
    .isLength({ min: 3 })
    .withMessage('for username minimum 3 characters required'),
  body('password')
  .notEmpty()
  .withMessage('password field is required')
  .isLength({ min: 3 })
  .withMessage('for password minimum 3 characters required')
]

export default validateAuthorization
