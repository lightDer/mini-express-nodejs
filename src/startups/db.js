import knex from 'knex'
import config from 'config'

const myKnex = knex({
  client: 'sqlite3',
  // debug: true,
  connection: {
    filename: config.get('db.filename')
  }
})

export default myKnex
