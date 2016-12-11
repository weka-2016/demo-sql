
exports.up = function(knex, Promise) {
  return knex.schema.table('cats', function (table) {
    table.dropColumn('created_at');
    table.dropColumn('updated_at');
    table.string('color');
  }) 
};

exports.down = function(knex, Promise) {
  return knex.schema.table('cats', function (table) {
    table.dropColumn('color');
    table.timestamp('created_at');
    table.timestamp('updated_at');
  }) 
};

