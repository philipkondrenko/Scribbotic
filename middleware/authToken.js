const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
require('dotenv').config()
const cookieParser = require('cookie-parser')

app.use(cookieParser())

// Authenticate JWT
function authenticateToken(req, res, next) {
    const token = req.cookies.token
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
        next()
    } catch (err) {
        res.clearCookie("token")
        return res.redirect('/login')
    }
}

module.exports = authenticateToken