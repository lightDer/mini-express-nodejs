import { Router } from 'express'
import {
  getTodos
} from '../controllers/todo.js'

const router = Router()
router.get('/api/todo', getTodos)

export default router
