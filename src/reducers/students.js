// src/reducers/recipes.js
import { FETCHED_STUDENTS, CREATE_STUDENT } from '../actions/student/student'




export default function(state = [], action = {}) {
  switch(action.type) {
    case FETCHED_STUDENTS:
      return [...action.payload]
    case CREATE_STUDENT:
      return [action.payload, ...state,]

    default:
      return state
  }
}
