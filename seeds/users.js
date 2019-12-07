
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'ross', team: 'hello', captain: true, game_started: false},
        {id: 2, name: 'kelly', team: 'world', captain: true, game_started: false},
        {id: 3, name: 'han', team: 'hello', captain: false, game_started: false},
        {id: 4, name: 'ollie', team: 'hello', captain: false, game_started: false},
      ]);
    });
};
