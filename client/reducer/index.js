import {combineReducers} from 'redux'

// import otherReducer from './other-reducer'
import pageNumber from './pageNumber'
import playerResponses from './playerResponses'
import teamName from './teamName'
import player from './player'
import players from './players'
import questions from './questions'
import answerCount from './answerCount'
import score from './score'


export default combineReducers({
    pageNumber,
    playerResponses,
    teamName,
    player, 
    players,
    questions,
    answerCount,
    score
})