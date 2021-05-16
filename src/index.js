import express from 'express'

const app = express()
// app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

app.get('*', (req, res) => res.json({ message: 'Hello world!' }))

app.listen(3000, () => {
  console.log('Sever listen on port 3000')
})
