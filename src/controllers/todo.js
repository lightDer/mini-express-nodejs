import knex from '../startups/db.js'

async function getTodos (req, res) {
  const ret = await knex('todo').select('*')
  res.json(ret)
}

export {
  getTodos
}
