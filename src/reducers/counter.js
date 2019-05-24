const initialState = {
  b:0,
  c:[]
}

export default (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
      return {
        ...state,
          b: state.b + 3,
      }
      case 'DECREMENT':
        return {...state,
            b:state.b - action.number2 * action.number
        }
      default:
        return state
    }
  }