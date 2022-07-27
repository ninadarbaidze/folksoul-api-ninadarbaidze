import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {  Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator'
import { User } from 'models'
import {Error, UserTypes} from 'types'



const login = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body as UserTypes
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(422).json({ errorMessage: errors.array()[0].msg })
  }
  try {
    const user = await User.findOne({ username }) as UserTypes
    if (!user)
      res
        .status(401)
        .json({ errorMessage: 'Please provide correct credentials' })

    const isEqual = await bcrypt.compare(password, user.password)
    if (!isEqual) {
      res
        .status(401)
        .json({ errorMessage: 'Please provide correct credentials' })
      const error = new Error('Please provide correct credentials') as Error
      error.statusCode = 401
      throw error
    }
    const token = jwt.sign(
      {
        username: user.username,
      },
      'seriouslysupersecret',
      { expiresIn: '2h' }
    )
    res.status(200).json({ token })
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}


export default login