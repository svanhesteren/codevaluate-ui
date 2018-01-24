import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchOneStudent} from '../../actions/student/student'
// import {fetchBatchStudents} from '../../actions/student/student'
// import StudentsContainer from '../students/StudentsContainer'
// import Title from '../components/Title'
import {Link} from 'react-router-dom'

export class StudentPage extends PureComponent {
  // static propTypes = {
  //   title: PropTypes.string,
  // }

  componentWillMount() {
    // console.log(this.props.match.params.batchId);
    const studentId = this.props.match.params.studentId
    this.props.fetchOneStudent(studentId)


  }

  render() {
    return (
      <div>
        <h1>hi this is studentPage</h1>
        <pre>{JSON.stringify(this.props.students[0], null, 2)}</pre>
      </div>
    )
  }

}




const mapDispatchToProps = { fetchOneStudent }

const mapStateToProps = ({students}, {match}) => ({students, match})

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage)
