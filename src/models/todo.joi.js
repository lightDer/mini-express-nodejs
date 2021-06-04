import Joi from 'joi'

const todoSchema = Joi.object({
  desc: Joi.string().required()
})

const updateTodoSchema = todoSchema.append({
  id: Joi.number().required()
})

export {
  todoSchema,
  updateTodoSchema
}
