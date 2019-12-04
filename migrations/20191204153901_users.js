
exports.up = (knex, promise) {
  return knex.schema.createTable('users', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('team')
      table.boolean('captian')
      table.date('date_created')
  })
};

exports.down = (knex, promise) => {
  return knex.schema.dropTable('users')
};
