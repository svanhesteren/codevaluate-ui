// src/reducers/recipes.js
import { FETCHED_EVALUATIONS } from '../actions/evaluation/evaluation'



export default function(state = [], action = {}) {
  switch(action.type) {
    case FETCHED_EVALUATIONS:
      return [...action.payload]

    default:
      return state
  }
}
