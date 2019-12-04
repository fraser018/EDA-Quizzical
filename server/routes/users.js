const express = require('express')

const db = require('../db/users')

const router = express.Router()

router.post('/', (req,res) => {
  console.log(req.body)
  db.addPlayerToTeam(req.body.user, req.body.team, req.body.captain)
  .then(thing => console.log(thing))
})


module.exports = router