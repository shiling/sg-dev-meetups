const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const mongo = require('./mongo')
const { SECRET_KEY } = require('../config')

// Create a token from a payload 
function createToken(payload, secretKey, options) {
  return jwt.sign(payload, secretKey, options)
}

// Verify the token 
function verifyToken(token, secretKey) {
  try {
    return jwt.verify(token, secretKey)
  } catch (e) {
    return null
  }
}

// Check if the user exists in database
async function isAuthenticated({ email, password }) {
  let user = null
  try {
    user = await mongo.db.collection('user').findOne({ email })
    if (user && bcrypt.compareSync(password, user.password)) {
      return user
    }
  } catch (e) { }
  return null
}

async function signupUser(reqBody) {
  const { email, firstName, lastName } = reqBody
  try {
    const password = bcrypt.hashSync(reqBody.password, 12)
    const data = {
      firstName,
      lastName,
      email,
      password,
      signIn: 'email',
      role: 'user',
      status: 1,
      createdAt: new Date(),
      updatedAt: new Date()  
    }
    return await mongo.db.collection('user').insertOne(data)
  } catch (e) { }
  return null
}

async function isGithubAuthenticated(githubId) {
  let user = null
  try {
  } catch (e) { }
  return null
}

async function authUser(req, res, next) {
  try {
    if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
      return res.status(401).json({ message: 'Error in authorization format' })
    }
    const token = req.headers.authorization.split(' ')[1]
    if (token) {
      const result = verifyToken(token, SECRET_KEY)
      if (result) {
        req.decoded = result
        return next()
      }
    }
  } catch (err) {
    console.log('authUser', err.toString())
  }
  return res.status(401).json({ message: 'Error in token' })
}

module.exports = {
  createToken,
  verifyToken,
  isAuthenticated,
  isGithubAuthenticated,
  authUser,
  signupUser
}