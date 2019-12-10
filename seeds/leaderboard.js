
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('leaderboard').del()
      .then(function () {
        // Inserts seed entries
        return knex('leaderboard').insert([
          {id: 1, teamName: 'Woof', teamScore: 50, teamSize: 2, totalRounds: 2},
          {id: 2, teamName: 'Red', teamScore: 200, teamSize: 2, totalRounds: 5},
          {id: 3, teamName: 'Cats', teamScore: 400, teamSize: 4, totalRounds: 5},
        ]);
      });
  };
  