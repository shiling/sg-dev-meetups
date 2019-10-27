const axios = require('axios')
const express = require('express')
const authRoutes = express.Router()

const { createToken, isAuthenticated, isGithubAuthenticated, authUser, signupUser } = require('../services/auth')

// const User = require('../models/User')

const { KEY_EXPIRY, SECRET_KEY, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = require('../config')

authRoutes
.post('/signup', async (req,res) => {
  try {
    await signupUser(req.body)
    res.status(201).end()
  } catch(e) {
    // duplicate username, email?
    res.status(500).end()
  }
})
.post('/check-github', async (req,res) => {
  try {
    const { code, state } = req.body
    const { data } = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code,
      state
    }, {
      headers: {
        Accept: 'application/json'
      }
    })
    const rv = await axios.get('https://api.github.com/user?access_token=' + data.access_token)
    const githubId = rv.data.id // github id, email
    const user = await isGithubAuthenticated(githubId) // match github id with our user in our application
    if (!user) {
      const message = 'Unauthorized'
      return res.status(401).json({ message })
    }
    const { id } = user
    const token = createToken({ id }, SECRET_KEY, {expiresIn: KEY_EXPIRY}) // 5 minute expire for login
    return res.status(200).json({ token })
  } catch (e) {
    console.log(e)
  }
  return res.status(401).end()
})
.get('/logout', authUser, async (req,res) => {
  // clear in frontend only
  try {
    return res.status(200).json({ message: 'Logged Out' })  
  } catch (e) { }
  return res.status(500).json()  
})
.post('/login', async (req,res) => {
    try {
      const { email, password } = req.body
      const user = await isAuthenticated({ email, password })
      if (!user) {
        const message = 'Incorrect email or password'
        return res.status(401).json({ message })
      }
      const { role } = user
      const token = createToken({ email, role }, SECRET_KEY, {expiresIn: KEY_EXPIRY}) // 5 minute expire for login
      return res.status(200).json({ token })  
    } catch (e) {
      // console.log(e.toString())
    }
    return res.status(500).json()  
})
  .get('/me', authUser, async (req,res) => {
    try {
      const { id } = req.decoded
      // you can also get more user information from here from a datastore
      return res.status(200).json({ user: id })
    } catch (e) { }
    return res.status(401).json({ message: 'Error token revoked' })
  })

module.exports = authRoutes
