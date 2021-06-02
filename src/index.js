import express from 'express'
import 'express-async-errors'

import todoRoute from './routes/todo.js'

const app = express()

function myLogger (req, res, next) {
  console.log('Logger', new Date().toISOString(), req.path)
  next()
}

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(myLogger)

app.use(todoRoute)
app.get('/status', (req, res) => res.send('I am still alive.'))
app.post('/mirror', (req, res) => res.json(req.body))

app.get('*', (req, res) => res.status(404).json({ message: '404 Not found.' }))

app.listen(3000, () => {
  console.log('Sever listen on port 3000')
})
