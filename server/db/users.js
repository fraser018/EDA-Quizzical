const environment = process.env.NODE.ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)



function addPlayerToTeam(user, team, captain, db = connection){
  // if (captain == true){
  //   // check if team already exists
  //   // if team already exists - return error
  //   // if team doesn't exist - create team and add user to it as a captain
  //   doesTeamExist(team)
  //   .then(teamInfo => {
  //     if (teamInfo.length == 0) {
  //       console.log("team does not exist")
  //     }
  //   })
  // }
  // else {
  //   // check if team exists
  //   // if team exists - add user to team
  //   // if team doesn't exist - return error 
  // }



  return db('users').insert({'name': user, 'team': team, 'captain': captain})
}

// function doesTeamExist(team, db = connection) {
//   return db('users').where('team', team).select()
// }

function getPlayersFromTeam(team, db = connection){
  return db('users').where('team', team)
}

module.exports = {
  addPlayerToTeam,
  getPlayersFromTeam
}