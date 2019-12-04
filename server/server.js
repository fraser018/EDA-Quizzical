const path = require('path')
const express = require('express')

const server = express()

const users = require('./routes/users')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/users', users)

module.exports = server
