const reducer = (state = [], action) => {
    switch (action.type){
      case 'SUBMIT_ANSWER':{
        return [...state, action.response]
      }
      case 'CLEAR_PR_STATE':{
        return []
      }

      default: return state
    }
  }
  
  export default reducer