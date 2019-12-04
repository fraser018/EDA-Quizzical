const reducer = (state = 0, action) => {
    switch (action.type){
      case 'INCREMENT_PAGE':{
        return state += 1
      }
      case 'INSTRUCT':{
          return -1
      }
      case 'CREATE_GAME':{
        return 1
      }
      case 'START_GAME':{
        return 3
    }
      default: return state
    }
  }
  
  export default reducer