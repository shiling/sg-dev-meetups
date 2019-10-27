const bcrypt = require('bcryptjs')
let password = bcrypt.hashSync('1111', 12)

const users = [
  {
    firstName: 'Auz',
    lastName: 'Adventure',
    email: 'auzadventure@gmail.com', // SUPERADMIN ahopapp.com
    password,
    signIn: 'gmail',
    role: 'admin', // user, admin
    status: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Aaron',
    lastName: 'Gong',
    email: 'aaronjxz@gmail.com', // SUPERADMIN ahopapp.com
    password,
    signIn: 'gmail',
    role: 'admin', // user, admin 
    status: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = users
