const express = require('express')
const request = require('superagent')
const router = express.Router()



const qAmount = '1'
const gameApi =
  ('https://opentdb.com/api.php?amount=' + qAmount + '&category=9&difficulty=medium&type=multiple')


  router.get('/', (req,res) => {
    return request
      .get(gameApi)
      .then(res => processApiQuestions(res.body.results[0]))
  })

// export function getQuestions() {
//   return request
//     .get(gameApi)
//     .then(res => processApiQuestions(res.body.results[0]))
// }

function processApiQuestions(apiResponse) {
  return {
    question: apiResponse.question
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'"),
    correctAnswer: apiResponse.correct_answer
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'"),
    incorrectAnswer1: apiResponse.incorrect_answers[0]
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'"),
    incorrectAnswer2: apiResponse.incorrect_answers[1]
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'"),
    incorrectAnswer3: apiResponse.incorrect_answers[2]
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
  }
}




module.exports = router