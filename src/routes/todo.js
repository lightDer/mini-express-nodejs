import { Router } from 'express'
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo
} from '../controllers/todo.js'
import auth from '../middleware/auth.js'

const router = Router()
router.get('/api/todos', auth, getTodos)
router.post('/api/todo', auth, addTodo)
router.put('/api/todo/:id', auth, updateTodo)
router.delete('/api/todo/:id', auth, deleteTodo)

// router.get('/api/todos', getTodos)
// router.post('/api/todo', addTodo)
// router.put('/api/todo/:id', updateTodo)
// router.delete('/api/todo/:id', deleteTodo)

export default router
