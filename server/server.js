const path = require('path')
const express = require('express')

const server = express()

const users = require('./routes/users')
const questions = require('./routes/questions')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// server.use('/api/v1/users', users)
// server.use('/api/v1/questions', questions)

module.exports = server
