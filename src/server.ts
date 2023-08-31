import fastify from 'fastify'

import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  const result = await knex('sqlite_schema').select('*')
  return result
})

void app
  .listen({
    host: '0.0.0.0',
    port: env.PORT
  })
  .then(() => {
    console.log('🚧 HTTP Server Running! 🚀')
  })
