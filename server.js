const app = require("./src/app");
const dotenv = require("dotenv")
const PORT = process.env.PORT || 8080
const errorhandler = require('errorhandler')

dotenv.config()

if (process.env.NODE_ENV === "development") {
  app.use(errorHandler())
} else {
  app.use((err, request, response, next) => {
    console.error(err)
    response.status(500).send("erver Error")
  })
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}.`)
  console.log('Press CTRL-C to stop\n')
})