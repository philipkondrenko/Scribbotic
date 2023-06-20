require('dotenv').config()
const express = require('express')
const router = express.Router()
const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

router.use(cookieParser())

// Sign up route
router.post('/', async (req, res) => {
    const { name, email, password } = req.body
    const userExists = await User.findOne({email})
    if (userExists) {
        res.status(400)
        res.redirect('/error-signup')
    } else {
        res.status(201)
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)
        const user = User.create({
            name,
            email,
            password: hashedPassword,
        })
        res.redirect('/dashboard')
    }
})

// Login route
router.post('/login', async (req, res) => {
   const { email, password} = req.body
   const user = await User.findOne({email})
   if (user && (await bcrypt.compare(password, user.password))) {
    // Generates JWT 
    const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, { expiresIn: "15m" })
    res.cookie('token', token, {
        httpOnly: true
    })
    res.status(200).redirect('/dashboard')
    } else {
        res.status(400)
        res.redirect('/error-login')
    }
})    

module.exports = router