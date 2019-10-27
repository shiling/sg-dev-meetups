
const express = require('express')
const userRoutes = express.Router()

const { authUser } = require('../services/auth')
const mongo = require('../services/mongo')
const ObjectID = require('mongodb').ObjectID

userRoutes
  // get user
  // .get('/me', authUser, async (req,res) => {
  //   let user = null
  //   try {
  //     user = await findUserByEmail(req.decoded.id)
  //   } catch (e) { }
  //   res.status(200).json(user)
  // })

  .get('/user', authUser, async (req, res) => {
    const rv = { results: [], total: 0 }
    try {
      const { page = 0, limit = 25, name = '', role = 'all' } = req.query
      const filter = { }
      if (role !== 'all') filter.role = role
      if (name) filter.name = new RegExp(name, 'i')
      if (req.decoded.role === 'admin') {
        rv.total = await mongo.db.collection('user').find(filter).count()
        rv.results = await mongo.db.collection('user').find(filter)
          .sort({ email: 1 })
          .skip(parseInt(page) * parseInt(limit))
          .limit(parseInt(limit))
          .toArray()
      }
    } catch (e) { }
    res.status(200).json(rv)
  })

  .get('/user/:id', authUser, async (req, res) => {
    let user = {}
    try {
      if (req.decoded.role === 'admin') {
        user = await mongo.db.collection('user').findOne({ _id: new ObjectID(req.params.id) })
      }
    } catch (e) { }
    res.status(200).json(user)
  })

  .patch('/user/:id', authUser, async (req, res) => {
    try {
      if (req.decoded.role === 'admin') {
        const data = req.body
        delete data.email // cannot change email
        await mongo.db.collection('user').updateOne(
          { _id: new ObjectID(req.params.id) },
          { $set: data } // change role, change pin, change contact number
        )
      }
      res.status(200).json()
    } catch (e) {
      res.status(500).json({ error: e.toString() })
    }
  })
 
  .post('/user', authUser, async (req, res) => {
    try {
      if (req.decoded.role === 'admin') {
        const data = req.body
        await mongo.db.collection('user').insertOne(data)
      }
      res.status(200).json()
    } catch (e) {
      res.status(500).json({ error: e.toString() })
    }
  })

module.exports = userRoutes
