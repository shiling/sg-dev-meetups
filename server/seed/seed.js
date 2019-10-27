// const dotenv = require('dotenv')
// dotenv.config()
// const fs = require('fs')

// if (process.env.NODE_ENV) {
//   const envConfig = dotenv.parse(fs.readFileSync('.env.' + process.env.NODE_ENV))
//   for (var k in envConfig) process.env[k] = envConfig[k]
// }

const mongo = require('../services/mongo')

function dbReady() {
  return new Promise(function (resolve, reject) {
      (function waitForDb(){
          if (mongo.db) return resolve()
          setTimeout(waitForDb, 30)
      })()
  })
}

async function seed() {
  await dbReady()
  // console.log(mongo)
  console.log('start')
  try {
    await mongo.db.collection('test').insertOne({
      a: 'aa', b: 'bb'
    })
    const users = require('./seed-users')
    await mongo.db.collection('user').deleteMany({})
    await mongo.db.collection('user').createIndex({ email: 1 })
    await mongo.db.collection('user').insertMany(users)  
  } catch (e) {
    console.log(e.toString())
  }
  console.log('end')
  // await dbReady()
  // console.log(db)
}

seed()
