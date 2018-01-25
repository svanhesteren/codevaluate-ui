// src/reducers/recipes.js
import { FETCHED_BATCHES, CREATE_BATCH } from '../actions/batch/batch'




export default function(state = [], action = {}) {
  switch(action.type) {
    // case 'TOGGLE_LIKE_RECIPE':
    //   return state.map((recipe) => {
    //     if (recipe._id !== action.payload) return recipe
    //     return { ...recipe, liked: !recipe.liked }
    //   })
    case CREATE_BATCH:
      return [...action.payload].concat(state)

    case FETCHED_BATCHES:

      // console.log(action.payload)
      return [...action.payload]

    default:
      return state
  }
}
