import {combineReducers} from 'redux'

// import otherReducer from './other-reducer'
import pageNumber from './pageNumber'
import playerResponses from './playerResponses'
import teamName from './teamName'
import player from './player'


export default combineReducers({
    pageNumber,
    playerResponses,
    teamName,
    player
})