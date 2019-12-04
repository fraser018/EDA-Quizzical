const environment = process.env.NODE.ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)



function addPlayerToTeam(user, team, captain, db = connection){
  return db('users').insert({'name': user, 'team': team, 'captain': captain})
}

function getPlayersFromTeam(team, db = connection){
  return db('users').where('team', team)
}

module.exports = {
  addPlayerToTeam,
  getPlayersFromTeam
}