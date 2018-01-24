import {ADD_LOADING, REMOVE_LOADING} from '../actions/loading'


export default function(state = [], action = {}) {
  switch(action.type) {
    case ADD_LOADING:
      return [...state, action.payload]

    case REMOVE_LOADING:
      return state.filter(item => item !== action.payload)

    default:
      return state
  }
}
