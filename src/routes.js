// src/routes.js
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import SignUp from './users/SignUp'
import SignIn from './users/SignIn'
import BatchesContainer from './components/batches/BatchesContainer'
import BatchPage from './components/batches/BatchPage'
import StudentsContainer from './components/students/StudentsContainer'
import StudentsPage from './components/students/StudentsPage'
import StudentPage from './components/students/StudentPage'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={BatchesContainer}/>
        <Route exact path="/batches" component={BatchesContainer}/>
        <Route exact path="/students" component={StudentsPage}/>
        <Route exact path="/students/:studentId" component={StudentPage}/>

        <Route exact path="/batches/:batchId" component={BatchPage} />
        <Route exact path="/batches/:batchId/students" component={StudentsContainer} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
      </div>
    )
  }
}
