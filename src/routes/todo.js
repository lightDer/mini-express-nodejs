import { Router } from 'express'
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo
} from '../controllers/todo.js'

const router = Router()
router.get('/api/todos', getTodos)
router.post('/api/todo', addTodo)
router.put('/api/todo/:id', updateTodo)
router.delete('/api/todo/:id', deleteTodo)

export default router
