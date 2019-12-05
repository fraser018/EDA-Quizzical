const reducer = (state = 1, action) => {
    switch (action.type){
      case 'INCREMENT_ROUND':{
          console.log(state)
        return state += 1
      }  
      default: return state
    }
  }
  
  export default reducer