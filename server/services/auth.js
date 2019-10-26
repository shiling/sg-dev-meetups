const jwt = require('jsonwebtoken')

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
  } catch (e) { }
  return null
}

async function isGithubAuthenticated(githubId) {
  let user = null
  try {
  } catch (e) { }
  return null
}

module.exports = {
  createToken,
  verifyToken,
  isAuthenticated,
  isGithubAuthenticated
}