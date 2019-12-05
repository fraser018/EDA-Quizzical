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

  socket.on('show players in lobby', players =>{
    io.to(players[0].team).emit('show players in lobby', players)
  })

  socket.on('all players in', teamData=>{
    io.to(teamData.teamName).emit('all players in')
    questions.getQuestions(teamData.numOfPlayers)
    .then(questions => {
      io.to(teamData.teamName).emit('receive questions', questions)
    })
  })

  socket.on('submitted answer', teamName=>{
    io.to(teamName).emit('submitted answer')
  })

  socket.on('reset answer count', teamName=>{
    io.to(teamName).emit('reset answer count')
  })

  socket.on('score', response=>{
    io.to(response.teamName).emit('score', response.score)
  })

  socket.on('new question', teamData=>{
    io.to(teamData.teamName).emit('new question')
    questions.getQuestions(teamData.numOfPlayers)
    .then(questions => {
      io.to(teamData.teamName).emit('receive questions', questions)
    })
  })

  socket.on('main menu', teamName=>{
    io.to(teamName).emit('main menu')
  }) 

  socket.on('increment pages', teamName=>{
    io.to(teamName).emit('increment pages')
  }) 

})

http.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})