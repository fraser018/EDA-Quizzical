const reducer = (state = {}, action) => {
  switch (action.type){
    case 'SAVE_PLAYER_DETAILS':{
      console.log(action.playerInfo)
      let player = action.playerInfo
      player.socketId = state.socketId
      console.log(player)
      return player
    }
    case 'ADD_SOCKET_ID':{
      state.socketId = action.socketId
      return state
    }

    default: return state
  }
}

export default reducer