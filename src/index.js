import express from 'express'
import 'express-async-errors'

import todoRoute from './routes/todo.js'
import userRoute from './routes/user.js'
import errorHandler from './middleware/error.js'

const app = express()

function myLogger (req, res, next) {
  console.log('Logger', new Date().toISOString(), req.path)
  next()
}

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(myLogger)

app.use(todoRoute)
app.use(userRoute)

app.use(errorHandler)

app.all('*', (req, res) => res.status(404).json({ message: 'Ooops. 404 Not found.' }))

app.listen(3000, () => {
  console.log('Sever listen on port 3000')
})
