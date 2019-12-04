const reducer = (state = [], action) => {
    switch (action.type){
      case 'SUBMIT_ANSWER':{
        return [...state, action.response]
      }

      default: return state
    }
  }
  
  export default reducer