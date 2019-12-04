const express = require('express')

const db = require('../db/users')

const router = express.Router()

router.get('/', (req, res) =>{
  db.getTeams()
    .then(teams => res.json(teams))
})

module.exports = router