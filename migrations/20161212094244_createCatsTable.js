
exports.up = function(knex, Promise) {

  return knex.schema.createTable('cats', function (table) {
    table.increments();
    table.string('name');
    table.string('bio');
    table.integer('age');
    table.boolean('desexed');
    table.timestamps();
  }) 

};

exports.down = function(knex, Promise) {

  return knex.schema.dropTable('cats')

};
