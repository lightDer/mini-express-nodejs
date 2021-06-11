# A minimum boilerplate for epxress API
- Node.js LTS 14.x.x

## Covered
- Express.js (routing, middleware)
- Database integration (query builder: Knex)
- Authentication (by middleware)
- Error handling
  - define error-handling middleware
  - listen on `uncaughtException` and `unhandledRejection` event
- Logging (by middleware with Winston)
- Config (extract to JSON file)
- APIs documentation (Swagger)

## DEMO: a simple to-do list app
- POST /login
- DELETE /logout
- POST /todo
- GET /todos
- PUT /todo/:id
- DELETE /todo/:id
