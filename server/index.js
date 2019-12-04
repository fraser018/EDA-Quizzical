const server = require('./server')
const http = require('http').createServer(server)
const io = require('socket.io')(http)

const port = process.env.PORT || 3000

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
