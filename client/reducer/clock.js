const reducer = (state = 10, action) => {
  switch (action.type){
    case 'DECREMENT_CLOCK':{
      return state -1
    }
    case 'RESET_CLOCK':{
      return 10
    }
    default: return state
  }
}

export default reducer