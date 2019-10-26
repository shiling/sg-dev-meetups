'use strict'
// const functions = require('firebase-functions')
const express = require('express')
const history = require('connect-history-api-fallback')
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http')
const https = require('https')

const { API_PORT } = require('./config')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(history()) // causes problems when using postman, comment out to checkout API
app.use(express.static('public')) // for html content

const apiRoutes = require('./routes/api')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const meatRoutes = require('./routes/meta')
const groupRoutes = require('./routes/group')
const eventRoutes = require('./routes/event')

app.use(cors({
  exposedHeaders: ['refresh-token'] // allow this to be sent back in response
}))
app.use('/api/auth', authRoutes)
app.use('/api', apiRoutes, authorRoutes, bookRoutes, categoryRoutes, pageRoutes)
app.get("*", async (req, res) => res.status(404).json({ data: 'Not Found...' }))

let server
if (USE_HTTPS) {
  server = https.createServer(httpsCerts, app)
} else {
  server = http.createServer(app)
}

module.exports = app
