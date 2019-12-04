const server = require('./server')
const http = require('http').createServer(server)
const io = require('socket.io')(http)

const port = process.env.PORT || 3000


io.on('connection', function(socket){
  console.log('a user has connected')
  socket.on('disconnect', function(){
    console.log('user disconnected')
  })
  socket.on('join team', teamName =>{
    socket.join(teamName)
  })
  socket.on('all players in', teamName=>{
    io.to(teamName).emit('all players in')
  })
  // start up funcs below here
  
})


http.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
