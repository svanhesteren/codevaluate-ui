// src/routes.js
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import RecipePage from './recipes/RecipePage'
import RecipesContainer from './recipes/RecipesContainer'
import RecipeEditor from './recipes/RecipeEditor'
import SignUp from './users/SignUp'
import SignIn from './users/SignIn'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={RecipesContainer} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
      </div>
    )
  }
}
