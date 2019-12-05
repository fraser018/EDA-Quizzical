const reducer = (state = 0, action) => {
    switch (action.type){
      case 'INCREMENT_ANSWER_COUNT':{
        return state += 1
      }
      default: return state
    }
  }
  
  export default reducer