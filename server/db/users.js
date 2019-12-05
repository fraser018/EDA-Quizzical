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

module.exports = {
  addPlayerToTeam,
  getPlayersFromTeam,
  getTeams
}