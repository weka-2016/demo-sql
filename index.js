var config = require('./knexfile').development
var knex = require('knex')(config)



knex.raw('SELECT * FROM cats')
  .then( response => {
    console.log(response)
    knex.destroy()
  })

