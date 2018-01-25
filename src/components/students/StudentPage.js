import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchOneStudent} from '../../actions/student/student'
import {fetchStudentEvaluations} from '../../actions/evaluation/evaluation'
import EvaluationsContainer from '../evaluations/EvaluationsContainer'
import EvaluationForm from "../evaluations/EvaluationForm"
// import {fetchBatchStudents} from '../../actions/student/student'
// import StudentsContainer from '../students/StudentsContainer'
// import Title from '../components/Title'
// import {Link} from 'react-router-dom'

export class StudentPage extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  componentWillMount() {
    // console.log(this.props.match.params.batchId);
    const studentId = this.props.match.params.studentId
    this.props.fetchOneStudent(studentId)
    this.props.fetchStudentEvaluations(studentId)

  }

  render() {
    // console.log(this.props.students);
    const studentName = this.props.students.map(p => (p.name|| ""))[0]
    const studentPic = this.props.students.map(p => (p.picture|| ""))[0]


    const {signedIn} = this.props
    if(!signedIn) {return null}

    const style = {
      'display':'flex',
      'flexDirection' : 'column'
    }

    return (

      <div style={style}>

          <div style={{padding: 30}}>
          <h2>Name: { studentName}</h2>
          <img src= { studentPic} alt="student" />
          <h3>Create Evaluation: </h3>
          <EvaluationForm studentId={this.props.match.params.studentId} />
          <h3>Evaluations: </h3>
        </div>
        <EvaluationsContainer evaluations={this.props.evaluations} />
      </div>
    )
  }

}




const mapDispatchToProps = { fetchOneStudent, fetchStudentEvaluations }

const mapStateToProps = ({students, evaluations, currentUser}, {match}) => ({
  students: students,
  evaluations, match,
  signedIn: !!currentUser && !!currentUser._id
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage)
