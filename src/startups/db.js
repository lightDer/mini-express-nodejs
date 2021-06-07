import knex from 'knex'
import config from 'config'

const myKnex = knex({
  client: 'sqlite3',
  connection: {
    filename: config.get('db.filename')
  }
})

export default myKnex
