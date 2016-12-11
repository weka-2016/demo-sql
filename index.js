var config = require('./knexfile').development
var knex = require('knex')(config)



knex.raw('SELECT * FROM cats where id = ?', [1])
  .then( response => console.log(response))

