const express = require('express')
const router = express.Router()
const cookieParser = require('cookie-parser')
const authenticateToken = require('../middleware/authToken')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const Note = require('../models/noteModel')

router.use(cookieParser())

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home'
    })
})

router.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login'
    })
})

router.get('/error-login', (req, res) => {
    res.render('error-login', {
        title: 'Login'
    })
})

router.get('/signup', (req, res) => {
    res.render('signup', {
        title: 'Sign Up'
    })
})

router.get('/error-signup', (req, res) => {
    res.render('error-signup', {
        title: 'Sign Up'
    })
})

// Get all notes 
router.get('/dashboard', authenticateToken, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user._id })
        res.render('dashboard', {
            title: 'Dashboard',
            notes: notes,
        })
    } catch (err) {
        res.status(404)
    }
})

// Logout
router.get('/logout', authenticateToken, (req, res) => {
    res.clearCookie("token").status(300).redirect('/')
})

// Delete note
router.get('/:id', authenticateToken, (req, res) => {
    const id = req.params.id
    Note.findByIdAndDelete(id).then(result => {
        res.redirect('/dashboard')
    }).catch((err) => {
        console.log(err)
    })
})

router.get('/profile', authenticateToken, (req, res) => {
    res.send(req.user._id)
})

module.exports = router