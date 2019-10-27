const { MONGO_URL } = require('../config')
const { MongoClient } = require('mongodb')

const mongo = { db: null }
if (!mongo.db && MONGO_URL) {
  try {
    const client = new MongoClient(MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true // reconnectTries: Infinity, poolSize: 10, reconnectInterval
      // auth: { user: 'test', password: 'test123' },
        // authMechanism: authMechanism,
      // uri_decode_auth: true
      // reconnectTries: Infinity,
      // poolSize: 10
      // reconnectInterval
    })
    client.connect(err => {
      if (!err) {
        console.log('MONGO CONNECTED')
        mongo.db = client.db()
        // mongoStream = db.db('mm').collection('users').watch()
        // mongoStream.on('change', (change) => {
        //   console.log(change); // You could parse out the needed info and send only that data.
        //   // use websocket to listen to changes
        // })
      }
      else console.log('MONGO', err)
    })
  } catch (e) { console.log('mongo', e) }
}

module.exports = mongo
