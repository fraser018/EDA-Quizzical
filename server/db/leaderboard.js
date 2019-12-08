const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

function addToLeaderboard(teamData, db = connection){
    return db('leaderboard').insert({'teamName': teamData.teamName, 'teamScore': teamData.teamScore, 'teamSize': teamData.teamSize})
  }

  function getLeaderboard(teamSize, db = connection){
    return db('leaderboard')
    .where('teamSize', teamSize)
    .orderBy('teamScore', 'desc')
    .select()
  }

  

module.exports = {
    addToLeaderboard,
    getLeaderboard
}