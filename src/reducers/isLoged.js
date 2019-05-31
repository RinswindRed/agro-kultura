
export default (state = false, action) => {
      switch (action.type) {
        case 'LOG_IN':
        return state = action.payload
        default:
          return state
      }
    }