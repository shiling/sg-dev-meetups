// general API routes

const express = require('express')
const apiRoutes = express.Router()

const { authUser } = require('../services/auth')

apiRoutes
    .get('/health', (req,res) => res.status(200).json({ message: 'OK' })) // health check
    .get('/health-auth', authUser, (req,res) => res.status(200).json({ message: 'OK' })) // health check

module.exports = apiRoutes
