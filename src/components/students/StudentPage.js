import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchOneStudent} from '../../actions/student/student'
import {fetchStudentEvaluations, fetchAllEvaluations} from '../../actions/evaluation/evaluation'
import EvaluationsContainer from '../evaluations/EvaluationsContainer'
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
    this.props.fetchStudentEvaluations(studentId)

  }

  render() {
    const studentItems = this.props.students.map(student => student)[0]

    return (
      <div>
        <h2>Name: {!!studentItems && studentItems.name}</h2>
        <img src={!!studentItems && studentItems.picture} alt="student" />
        <h3>Evaluations: </h3>
        <EvaluationsContainer evaluations={this.props.evaluations} />
      </div>
    )
  }

}




const mapDispatchToProps = { fetchOneStudent, fetchStudentEvaluations }

const mapStateToProps = ({students, evaluations}, {match}) => ({students, evaluations, match})

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage)
