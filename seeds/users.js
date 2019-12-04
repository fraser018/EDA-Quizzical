
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'rowValue1', team: '', captain: true, date_created: ''},
        {id: 2, name: 'rowValue2', team: '', captain: true, date_created: ''},
        {id: 3, name: 'rowValue3', team: '', captain: true, date_created: ''}
      ]);
    });
};
