const reducer = (state = 0, action) => {
  switch (action.type){
    case 'SAVE_STRIKE':{
      console.log(action.strike)
      return (state + 1) * action.strike
    }
    default:
      return state
  }
}

export default reducer