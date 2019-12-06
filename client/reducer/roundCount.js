const reducer = (state = 1, action) => {
    switch (action.type){
      case 'INCREMENT_ROUND':{
        return state += 1
      }  
      case 'RESET_ROUND': {
        return 1
      }
      default: return state
    }
  }
  
  export default reducer