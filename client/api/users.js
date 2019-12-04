import request from 'superagent'


export function addPlayerToTeam(user, team, captain){
  console.log(team, user, captain)
  return request
    .post('/api/v1/users')
    .send({user, team, captain})
    .then(res => res.body)

}