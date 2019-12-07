const config = require('../../../knexfile').test
const database = require('knex')(config)

const db = require('../../../server/db/users')

beforeAll(()=> {
  return database.migrate.latest()
      .then(() => {
          return database.seed.run()
      })
})


test('addPlayerToTeam returns an array with the id of inserted player', ()=>{
  const expected = typeof 1
  return db.addPlayerToTeam('bob', 'winners', true, '000', database)
  .then(id=>{
    const actual = typeof id[0]
    expect(actual).toEqual(expected)
  })
})

test('getPlayersFromTeam returns all the players in one team', ()=>{
  const expected = [ { id: 1,
    name: 'ross',
    team: 'hello',
    captain: 1,
    game_started: 0,
    socket_id: null
  },
  { id: 3,
    name: 'han',
    team: 'hello',
    captain: 0,
    game_started: 0,
    socket_id: null
  },
  { id: 4,
    name: 'ollie',
    team: 'hello',
    captain: 0,
    game_started: 0,
    socket_id: null
  } ]
  return db.getPlayersFromTeam('hello')
  .then(players=>{
    const actual = players
    expect(actual).toEqual(expected)
  })
})

test('getTeams returns an array', ()=> {
  const expected = typeof []
  return db.getTeams(database)
  .then(teams => {
    
    const actual = typeof teams
    expect(actual).toEqual(expected)
  })
})


test('user in game updates game_started to true', ()=>{
  const expected =  [
    { id: 1,
    name: 'ross',
    team: 'hello',
    captain: 1,
    game_started: 1,
    socket_id: null
  },
  { id: 3,
    name: 'han',
    team: 'hello',
    captain: 0,
    game_started: 1,
    socket_id: null
  },
  { id: 4,
    name: 'ollie',
    team: 'hello',
    captain: 0,
    game_started: 1,
    socket_id: null
  } 
  ]
  return db.userInGame('hello', database)
  .then(()=>{
    db.getPlayersFromTeam('hello')
    .then(players=> {
      const actual = players
      expect(actual).toEqual(expected)
    })
  })
})

