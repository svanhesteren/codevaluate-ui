// src/reducers/recipes.js
import { FETCHED_EVALUATIONS, CREATE_EVALUATION } from '../actions/evaluation/evaluation'



export default function(state = [], action = {}) {
  switch(action.type) {
    case FETCHED_EVALUATIONS:
      return [...action.payload]
    case CREATE_EVALUATION:
      return [...action.payload].concat(state)

    default:
      return state
  }
}
