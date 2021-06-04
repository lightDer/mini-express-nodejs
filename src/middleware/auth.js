import { sessions } from '../controllers/user.js'

const EXPIRED_TIME = 3600 * 1000

export default function auth (req, res, next) {
  const token = req.header('Authorization')
  console.log(token)

  if (!sessions.has(token)) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const t = sessions.get(token)
  const now = Date.now()
  if (now - t > EXPIRED_TIME) {
    sessions.delete(token)
    return res.status(403).json({ message: 'Token timeout' })
  }

  sessions.set(token, now)
  next()
}
