// src/reducers/recipes.js
import { FETCHED_RECIPES } from '../actions/recipes/fetch'




export default function(state = [], action = {}) {
  switch(action.type) {
    case 'TOGGLE_LIKE_RECIPE':
      return state.map((recipe) => {
        if (recipe._id !== action.payload) return recipe
        return { ...recipe, liked: !recipe.liked }
      })

    case FETCHED_RECIPES:
      console.log("fetching recipes.......")
      // console.log(action.payload)
      return [...action.payload]

    default:
      return state
  }
}
