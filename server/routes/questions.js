const request = require('superagent')

function getQuestions(qAmount) {
  console.log('teamnumber', qAmount)
  const gameApi =
  'https://opentdb.com/api.php?amount='+qAmount+'&type=multiple'
//+ qAmount +'&category=' + (Math.floor(Math.random()*22) + 9) + 
  return (
    request
      .get(gameApi)
      .then(res => processApiQuestions(res.body.results))
  )
  

}

function processApiQuestions(apiResponse) {
  console.log(apiResponse)
  let trivias = apiResponse.map(trivia => {
      return {
          question: trivia.question
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'"),
          correctAnswer: trivia.correct_answer
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'"),
          incorrectAnswer1: trivia.incorrect_answers[0]
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'"),
          incorrectAnswer2: trivia.incorrect_answers[1]
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'"),
          incorrectAnswer3: trivia.incorrect_answers[2]
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
        }
      })
  return {
    trivias: trivias,
    jumbledTrivias: jumbleQuestions([...trivias])
  }
}



function jumbleQuestions(trivias) {
  // const trivias = processApiQuestions(res.body.results)
  let length = trivias.length
  let lastItem
  let i

  // While there remain elements to shuffle…
  while (length) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * length--)

    // And swap it with the current element.
    lastItem = trivias[length]
    trivias[length] = trivias[i]
    trivias[i] = lastItem
  }
  // console.log(trivias);
  let jumbledTrivias = trivias
  return jumbledTrivias
}

module.exports = {
  // router,
  getQuestions
}
