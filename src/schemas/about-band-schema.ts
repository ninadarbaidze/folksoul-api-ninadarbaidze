import { body } from 'express-validator'

const validateBand = () => [
  body('about')
    .notEmpty()
    .withMessage('about field is required')
]

export default validateBand
