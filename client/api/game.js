import request from 'superagent'

const gameApi = 'https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple'

export function getQuestions() {
    return request
    .get(gameApi)
    .then(res => processApiQuestions(res.body.results[0]))
}

function processApiQuestions(apiResponse) {
    let processedQuestion = apiResponse.question.replace(/&quot;/g,'"').replace(/&#039;/g,"'")

    return {
        question: processedQuestion,
        correctAnswer: apiResponse.correct_answer,
        incorrectAnswer1: apiResponse.incorrect_answers[0],
        incorrectAnswer2: apiResponse.incorrect_answers[1],
        incorrectAnswer3: apiResponse.incorrect_answers[2]
    }
}