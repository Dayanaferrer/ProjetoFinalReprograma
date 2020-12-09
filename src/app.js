require('dotenv-safe').config()

const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

let db = mongoose.connection

db.on("error", console.log.bind(console, "connection error:"))
db.once("open", () =>{
  console.log("Successful connection!")
})

const index = require("./routes/index")
const institutions = require("./routes/institutionsRoutes")

app.use(bodyParser.json()) 

app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  })

app.use("/", index)
app.use("/institutions", institutions)

module.exports = app
