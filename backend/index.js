const express = require("express")
const mongoose = require("mongoose")
const dotenv = require('dotenv').config()
const cors = require("cors") // helps the server to communicate with the client
const authController = require("./controllers/authController")

 const app = express()

 //mongodb connect
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL)


//routes/ middlewares
app.use(cors())
app.use(express.json)
app.use(express.urlencoded({extended: true}))
app.use("auth",authController)


 //starting server
app.listen(process.env.PORT, () => console.log("Server is up"))

// {"username": "username1",
// "email": "username1@gmail.com",
// "password": "password4username1"
// }
// http://localhost:5000/auth/register