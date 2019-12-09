const reducer = (state = {correct:0, total:0, points:0}, action) => {
  switch (action.type){
    case 'INCREMENT_SCORE':{
      return{
        correct: state.correct + action.score,
        total: state.total += 1,
        points: state.points + (50 * action.score)
      }
    }
    case 'SAVE_STRIKE':{
      return{
        correct: state.correct,
        total: state.total,
        points: state.points + (action.strike * 50)
      }
    }
    case 'RESET_SCORE':{
      return{
        correct: 0,
        total: 0
      }
    }

    default: return state
  }
}

export default reducer