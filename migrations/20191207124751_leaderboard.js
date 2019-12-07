
exports.up = (knex, promise) => {
    return knex.schema.createTable('leaderboard', (table) => {
        table.increments('id').primary()
        table.string('teamName')
        table.float('teamScore')
        table.integer('teamSize')
    })
  };
  
  exports.down = (knex, promise) => {
    return knex.schema.dropTable('leaderboard')
  };
  