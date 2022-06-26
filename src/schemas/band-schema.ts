import { body } from 'express-validator'

const validateBandMember = () => [
  body('name')
    .notEmpty()
    .withMessage('name field is required')
    .isLength({ min: 3 })
    .withMessage('minimum 3 characters required'),
  body('instrument')
  .notEmpty()
  .withMessage('instrument field is required')
  .isLength({ min: 2 })
  .withMessage('minimum 2 characters required'),
  body('orbitLength')
  .notEmpty()
  .withMessage('orbitLength field is required')
  .isLength({ min: 2 })
  .withMessage('minimum 2 characters required')
  .isNumeric()
  .withMessage('please enter only numbers'),
  body('color')
  .notEmpty()
  .withMessage('color field is required')
  .matches(/^#(?:[0-9A-F]{3}){1,2}$/)
  .withMessage('color format is invalid'),
  body('biography')
  .notEmpty()
  .withMessage('biography field is required')

]

export default validateBandMember
