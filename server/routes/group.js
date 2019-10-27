
const express = require('express')
const userRoutes = express.Router()

// const { authUser, findUserByEmail } = require('../services')
const mongo = require('../services/mongo')
const ObjectID = require('mongodb').ObjectID

userRoutes
  // get group
  // .get('/me', authUser, async (req,res) => {
  //   let group = null
  //   try {
  //     group = await findUserByEmail(req.decoded.id)
  //   } catch (e) { }
  //   res.status(200).json(group)
  // })

  .get('/group', authUser, async (req, res) => {
    const rv = { results: [], total: 0 }
    try {
      const { page = 0, limit = 25, name = '', role = 'all' } = req.query
      const filter = { }
      if (role !== 'all') filter.role = role
      if (name) {
        filter.name = new RegExp(name, 'i')
      }
      if (req.decoded.cat === 'Admin') {
        rv.total = await mongo.db.collection('group').find(filter).count()
        rv.results = await mongo.db.collection('group').find(filter)
          .sort({ email: 1 })
          .skip(parseInt(page) * parseInt(limit))
          .limit(parseInt(limit))
          .toArray()
      }
    } catch (e) { }
    res.status(200).json(rv)
  })

  .get('/group/:id', authUser, async (req, res) => {
    let group = {}
    try {
      if (req.decoded.role === 'Admin') {
        group = await mongo.db.collection('group').findOne({ _id: new ObjectID(req.params.id) })
      }
    } catch (e) { }
    res.status(200).json(group)
  })

  .patch('/group/:id', authUser, async (req, res) => {
    try {
      if (req.decoded.role === 'admin') {
        const data = req.body
        delete data.email // cannot change email
        await mongo.db.collection('group').updateOne(
          { _id: new ObjectID(req.params.id) },
          { $set: data } // change role, change pin, change contact number
        )
      }
      res.status(200).json()
    } catch (e) {
      res.status(500).json({ error: e.toString() })
    }
  })
 
  .post('/group', authUser, async (req, res) => {
    try {
      if (req.decoded.role === 'admin') {
        const data = req.body
        await mongo.db.collection('group').insertOne(data)
      }
      res.status(200).json()
    } catch (e) {
      res.status(500).json({ error: e.toString() })
    }
  })

module.exports = userRoutes
