
const User = {
  username: 'user',
  password: 'password'
}

const Todo = {
  id: 1,
  $desc: 'clean up room',
  created: new Date().toISOString()
}

const definition = {
  User,
  Todo
}

export default definition
