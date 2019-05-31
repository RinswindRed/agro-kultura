export const increment = () => ({
  type: 'INCREMENT'
})

export const decrement = (number,number2) => ({
    type: 'DECREMENT',
    number,
    number2
  })

  export const fetchMovies = (payload) => ({
  type:'FETCH_MOVIES',
  payload
})

export const logIn = (payload) => ({
  type:'LOG_IN',
  payload
})

