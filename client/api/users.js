import request from 'superagent'


export function addPlayerToTeam(user, team, captain){
  return request
    .post('/api/v1/users')
    .send({user, team, captain})
    .then(res => res.body)
}

export function getTeams(){
  return request.get('/api/v1/teams')
}