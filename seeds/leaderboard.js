
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('leaderboard').del()
      .then(function () {
        // Inserts seed entries
        return knex('leaderboard').insert([
          {id: 1, teamName: 'Woof', teamScore: 55, teamSize: 2},
        ]);
      });
  };
  