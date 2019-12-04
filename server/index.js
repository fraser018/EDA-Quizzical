const server = require('./server')
const http = require('http').createServer(server)
const io = require('socket.io')(http)
const questions = require('./routes/questions')

const port = process.env.PORT || 3000


io.on('connection', function(socket){
  console.log('a user has connected')
  socket.on('disconnect', function(){
    console.log('user disconnected')
  })
  socket.on('join team', teamName =>{
    socket.join(teamName)
  })
  socket.on('all players in', teamData=>{
    io.to(teamData.teamName).emit('all players in')
    questions.getQuestions(teamData.numOfPlayers)
      .then(questions => {
        console.log(questions)
      })
  })
  socket.on('show players in lobby', players =>{
    io.to(players[0].team).emit('show players in lobby', players)
  })
  
})


http.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
