import knex from '../startups/db.js'
import {
  todoSchema,
  updateTodoSchema
} from '../models/todo.joi.js'

async function getTodos (req, res) {
  /*
    #swagger.tags = ['Todo']
    #swagger.summary = 'get todo list'
    #swagger.responses[200] = {
      description: "todo id",
      schema: [ { $ref: '#/definitions/Todo' } ]
    }
  */

  const ret = await knex('todo').select('*')
  res.json(ret)
}

async function addTodo (req, res) {
  /*
    #swagger.tags = ['Todo']
    #swagger.summary = 'add todo'
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'add todo',
      schema: { $ref: '#/definitions/Todo' }
    }
    #swagger.responses[200] = {
      schema: { "id": 1 },
      description: "todo id"
    }
  */

  const { error, value } = todoSchema.validate(req.body)
  if (error) {
    return res.status(400).json(error)
  }

  const [id] = await knex('todo').insert({
    desc: value.desc,
    created: new Date().toISOString()
  })
  res.json({ id })
}

async function updateTodo (req, res) {
  /*
    #swagger.tags = ['Todo']
    #swagger.summary = 'update todo'
    #swagger.parameters['id'] = {
      in: 'query',
    }
    #swagger.parameters['obj'] = {
      in: 'body',
      schema: { $ref: '#/definitions/Todo' }
    }
  */

  const id = req.params.id
  const { error, value } = updateTodoSchema.validate({
    id,
    desc: req.body.desc
  })
  if (error) {
    return res.status(400).json({ message: error.message })
  }

  const ret = await knex('todo').where({ id }).update({ desc: value.desc })
  if (ret !== 1) {
    return res.status(400).json({ message: `Cannot found id: ${id}` })
  }
  res.json({ message: 'Updated successfully.' })
}

async function deleteTodo (req, res) {
  /*
    #swagger.tags = ['Todo']
    #swagger.summary = 'delete todo'
    #swagger.parameters['id'] = {
      in: 'query',
    }
  */

  const id = req.params.id
  const ret = await knex('todo').where({ id }).del()

  if (ret !== 1) {
    return res.status(400).json({ message: `Cannot found id: ${id}` })
  }
  res.status(204).json()
}

export {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo
}
