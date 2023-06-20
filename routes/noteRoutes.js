require('dotenv').config()
const express = require('express')
const router = express.Router()
const Note = require('../models/noteModel')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const authenticateToken = require('../middleware/authToken')

router.use(cookieParser())

// Make new note
router.post('/', authenticateToken, async (req, res) => {
    if (!(req.body.text)) {
        res.status(400)
    }
    const note = await Note.create({
        user: req.user._id,
        title: req.body.title,
        text: req.body.text
    })
    res.status(201).redirect('/dashboard')
})

module.exports = router