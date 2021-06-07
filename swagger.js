import definitions from './src/models/swagger.definitions.js'
import swagger from 'swagger-autogen'

const swaggerAutogen = swagger()
const outputFile = './src/swagger_output.json'
const endpointsFiles = [
  './src/routes/user.js',
  './src/routes/todo.js'
]
const doc = {
  host: '',
  tags: [
    { name: 'User', description: '' },
    { name: 'Todo', description: '' }
  ],
  definitions: definitions
}

swaggerAutogen(outputFile, endpointsFiles, doc)
