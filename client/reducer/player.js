const reducer = (state = {}, action) => {
  switch (action.type){
    // case 'SAVE_NAME':{
    //   return action.name
    // }
    case 'SAVE_PLAYER_DETAILS':{
      return action.playerInfo


    }

    default: return state
  }
}

export default reducer