import { Router } from 'express'

import {
  login,
  logout
} from '../controllers/user.js'
import auth from '../middleware/auth.js'

const router = Router()
router.post('/api/login', login)
router.delete('/api/logout', auth, logout)

export default router
