import knex from 'knex'

const myKnex = knex({
  client: 'sqlite3',
  connection: {
    filename: './db/main.sqlite'
  }
})

export default myKnex
