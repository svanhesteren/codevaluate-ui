// src/routes.js
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import SignUp from './users/SignUp'
import SignIn from './users/SignIn'
import BatchesContainer from './components/batches/BatchesContainer'
import BatchPage from './components/batches/BatchPage'
import StudentsContainer from './components/students/StudentsContainer'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={BatchesContainer}/>
        <Route exact path="/batches" component={BatchesContainer}/>
        <Route exact path="/students" component={StudentsContainer}/>
        <Route exact path="/batches/:batchId/students" component={StudentsContainer} />
        <Route exact path="/batches/:batchId" component={BatchPage} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
      </div>
    )
  }
}
