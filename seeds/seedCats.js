
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {

      // run many async commands in parallel ! (notice it's an array)
      return Promise.all([
        // Inserts seed entries
        knex.raw('INSERT INTO cats (name, bio) VALUES ("fluffy", "is a bad cat");'),
        knex.raw('INSERT INTO cats (name, bio) VALUES ("shadow", "is snuggly");'),
        knex('cats').insert({name: 'bobo', bio: 'bobo promises to behave'}),
      ])
    })
}
