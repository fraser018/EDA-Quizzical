
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        //{id: 1, question: 'rowValue1', correct_answer: '', incorrect_answer_1: '', incorrect_answer_2: '', incorrect_answer_3: '',},
       
      ]);
    });
};
