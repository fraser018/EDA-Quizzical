const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

function addPlayerToTeam(user, team, captain, db = connection){
  return db('users').insert({'name': user, 'team': team, 'captain': captain})
}

function getPlayersFromTeam(team, db = connection){
  return db('users').where('team', team)
}

function getTeams(db = connection){
  return db('users')
  .distinct()
  .pluck('team')
  .then(teams => teams)
}

function userInGame(team, db = connection){
  return db('users').where('team', team)
   .update({'game_started': true})
   .then(()=>res.send(200))
}

module.exports = {
  addPlayerToTeam,
  getPlayersFromTeam,
  getTeams,
  userInGame
}