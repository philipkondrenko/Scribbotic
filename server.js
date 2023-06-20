require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./routes/viewRoutes')
const userRouter = require('./routes/userRoutes')
const notesRouter = require('./routes/noteRoutes')
const port = process.env.PORT || 8080

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({ extended: true }))

// Routers
app.use('/', router)
app.use('/users', userRouter)
app.use('/notes', notesRouter)

// Database
try {
    mongoose.connect(process.env.MONGO_URL)
    console.log("connected to MongoDB")
} catch {
    console.log("error connecting")
}

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})