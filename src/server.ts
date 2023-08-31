import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const result = await knex('sqlite_schema').select('*')
  return result
})

void app
  .listen({
    host: '0.0.0.0',
    port: 3333
  })
  .then(() => {
    console.log('🚧 HTTP Server Running! 🚀')
  })
