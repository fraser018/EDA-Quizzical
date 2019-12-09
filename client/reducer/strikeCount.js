const reducer = (state = 0, action) => {
  switch (action.type){
    case 'SAVE_STRIKE':{
      return (state + 1) * action.strike
    }
    default:
      return state
  }
}

export default reducer