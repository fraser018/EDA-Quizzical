const reducer = (state = '', action) => {
  switch (action.type) {
    case 'SAVE_TEAM_NAME': {
      return action.teamName
    }
    default:
      return state
  }
}

export default reducer
