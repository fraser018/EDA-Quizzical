const reducer = (state = [], action) => {
  switch (action.type){
    case 'SAVE_STRIKE':{
      return [...state, action.strike]
    }
    default: return state
  }
}

export default reducer