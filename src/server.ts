import fastify from "fastify"

// instanciar a base da aplicação através da principal função
const app = fastify()

app.get("/hello", () => {
  return "Hello World"
})

app
  .listen({
    host: "0.0.0.0",
    port: 3333,
  })
  .then(() => {
    console.log("🚧 HTTP Server Running! 🚀")
  })
