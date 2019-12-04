import {combineReducers} from 'redux'

// import otherReducer from './other-reducer'
import pageNumber from './pageNumber'
import playerResponses from './playerResponses'

export default combineReducers({
    pageNumber,
    playerResponses
})