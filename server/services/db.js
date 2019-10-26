const { MONGO_URL } = require('../config')
let mongo

if (!mongo && MONGO_URL) {
  try {
    const url = MONGO_URL
    const MongoClient = require('mongodb').MongoClient

    // (async function() {
    mongo = new MongoClient(url, {
      // auth: { user: 'test', password: 'test123' },
      // authMechanism: authMechanism,
      useNewUrlParser: true,
      useUnifiedTopology: true
      // uri_decode_auth: true
      // reconnectTries: Infinity,
      // poolSize: 10
      // reconnectInterval
    })
    // try { await mongo.connect() } catch (e) { }
    mongo.connect((err, db) => {
      if (err) console.log('mongo error', err)
      else if (db) {
        // mongoStream = db.db('mm').collection('users').watch()
        // mongoStream.on('change', (change) => {
        //   console.log(change); // You could parse out the needed info and send only that data.
        //   // use websocket to listen to changes
        // })
      }
    })
    // })()
  } catch (e) { console.log('mongo', e) }
}

module.exports = mongo
