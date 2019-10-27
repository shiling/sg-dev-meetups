'use strict'
// const functions = require('firebase-functions')
const express = require('express')
const history = require('connect-history-api-fallback')
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http')
const https = require('https')

const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')

const { USE_HTTPS, API_PORT } = require('./config')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(history()) // causes problems when using postman - set header accept application/json in postman
app.use(express.static('public')) // for html content

const apiRoutes = require('./routes/api')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
// const meatRoutes = require('./routes/meta')
// const groupRoutes = require('./routes/group')
// const eventRoutes = require('./routes/event')

const specs = swaggerJSDoc({
    swaggerDefinition: {
      info: {
        title: 'SG-DEV-MEETUPS',
        version: '0.0.1',
        description: 'SG Dev Meetup API',
      },
      host: '127.0.0.1:' + API_PORT,
      basePath: '/',
      tags: [
        { name: 'Auth', description: 'Authentication' },
        { name: 'Base', description: 'The Base API' }
      ],
      schemes: [ 'http', 'https' ],
      securityDefinitions: {
        Bearer: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header'
        }
      },
      consumes: ['application/json'],
      produces: ['application/json']
    },
    apis: ['./routes/*.js']
  })
    
  app.use('/api-docs2', swaggerUi.serve, swaggerUi.setup(specs, { // for OpenAPI
    swaggerOptions: { docExpansion: 'none' },  
    explorer: true 
  }))
  

app.use(cors())
app.use('/api/auth', authRoutes)
app.use('/api', apiRoutes, userRoutes)
app.get("*", (req, res) => res.status(404).json({ data: 'Not Found...' }))

let server
if (USE_HTTPS) {
  server = https.createServer(httpsCerts, app)
} else {
  server = http.createServer(app)
}

module.exports = app
