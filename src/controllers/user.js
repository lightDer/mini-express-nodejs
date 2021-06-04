import crypto, { randomBytes } from 'crypto'

import knex from '../startups/db.js'
import { userSchema } from '../models/user.joi.js'

const sessions = new Map()

function hash (s = '') {
  return crypto.createHash('sha256').update(s).digest('hex')
}

async function login (req, res) {
  const { username, password } = req.body
  const { error } = userSchema.validate({ username, password })
  if (error) {
    return res.status(400).json({ message: error.message })
  }

  const hashedPassword = hash(password)
  const [ret] = await knex('user').where({ username }).select('password')
  if (!ret || ret.password !== hashedPassword) {
    return res.status(400).json({ message: 'Invalid username or password' })
  }

  const token = randomBytes(256).toString('hex')
  sessions.set(token, Date.now())
  res.json({ token })
}

function logout (req, res) {
  const token = req.header('Authorization')
  sessions.delete(token)

  res.status(204).json({})
}

export {
  sessions,
  login,
  logout
}
