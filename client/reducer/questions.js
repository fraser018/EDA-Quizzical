const reducer = (state = {}, action) => {
  switch (action.type){
    case 'ADD_QUESTIONS':{
      return action.questions
    }

    default: return state
  }
}

export default reducer