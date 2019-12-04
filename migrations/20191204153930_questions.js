
exports.up = (knex, promise) => {
  return knex.schema.createTable('questions', (table) => {
      table.increments('id').primary()
      table.string('question')
      table.string('correct_answer')
      table.string('incorrect_answer_1')
      table.string('incorrect_answer_2')
      table.string('incorrect_answer_3')
  })
};

exports.down = (knex, promise) => {
  return knex.schema.dropTable('questions')
}
