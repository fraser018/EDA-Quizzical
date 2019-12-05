const reducer = (state = {correct:0, total:0}, action) => {
  switch (action.type){
    case 'INCREMENT_SCORE':{
      return{
        correct: state.correct + action.score,
        total: state.total += 1
      }
    }

    default: return state
  }
}

export default reducer