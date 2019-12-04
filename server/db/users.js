const environment = process.env.NODE.ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)



function addPlayerToTeam(user, team, captain, db = connection){
  return db('users').insert({'name': user, 'team': team, 'captain': captain})
}

module.exports = {
  addPlayerToTeam
}