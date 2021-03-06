import express from 'express'
import 'express-async-errors'
import config from 'config'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger_output.json'

import todoRoute from './routes/todo.js'
import userRoute from './routes/user.js'
import logHandler, { logger } from './middleware/logger.js'
import errorHandler from './middleware/error.js'

const app = express()
if (process.env.NODE_ENV !== 'production') {
  app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
}

app.use(express.json()) // for parsing application/json
app.use(logHandler)

app.use(todoRoute)
app.use(userRoute)

app.use(errorHandler)

app.all('*', (req, res) => res.status(404).json({ message: 'Ooops. 404 Not found.' }))

const port = config.get('port')
app.listen(port, () => {
  console.log('ENV: ', process.env.NODE_ENV)
  console.log(`Sever listen on port ${port}`)
})

process.on('uncaughtException', (error) => {
  logger.error(error.message, error)
  setTimeout(() => process.exit(1), 1000)
})

process.on('unhandledRejection', (error) => {
  logger.error(error.message, error)
  setTimeout(() => process.exit(1), 1000)
})
