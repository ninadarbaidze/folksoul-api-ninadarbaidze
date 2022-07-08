import { body } from 'express-validator'

const validateSocials = () => [
  body('name')
    .notEmpty()
    .withMessage('name field is required'),
  body('url')
  .notEmpty()
  .withMessage('password field is required')
]

export default validateSocials
