import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchAllStudents} from '../../actions/student/student'
// import {fetchBatchStudents} from '../../actions/student/student'
import StudentsContainer from './StudentsContainer'
// import Title from '../components/Title'
// import {Link} from 'react-router-dom'

export class StudentsPage extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  componentWillMount() {
    // console.log(this.props.match.params.batchId);
    // const studentId = this.props.match.params.studentId
    this.props.fetchAllStudents()

  }

  render() {
    const {signedIn} = this.props
    if(!signedIn) {return null}

    return (
      <div>
        <h1>hi this is the all students Page</h1>
        <StudentsContainer students={this.props.students} />
      </div>
    )
  }

}


const mapDispatchToProps = { fetchAllStudents }

const mapStateToProps = ({students, currentUser}) => ({
  students,
  signedIn: !!currentUser && !!currentUser._id
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentsPage)
