import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchOneBatch} from '../../actions/batch/batch'
import {fetchBatchStudents, fetchLatestBatchEvaluations} from '../../actions/student/student'
import StudentsContainer from '../students/StudentsContainer'
import StudentForm from '../students/StudentForm'
import {batchShape} from './BatchItem'
import {replace, push} from 'react-router-redux'
import {randomStudent} from '../../randomStudent'
import RaisedButton from 'material-ui/RaisedButton'

export class BatchPage extends PureComponent {
  static propTypes = {
    batches: PropTypes.arrayOf(batchShape).isRequired,
    signedIn: PropTypes.bool.isRequired,
  }

  getRandomStudent = () => {
    const evaluations = this.props.evaluations
    const students = this.props.students
    console.log(evaluations);
    const result = randomStudent(evaluations)
    console.log(result);
    if (!!result) {
      // console.log(result)

      const selectedStudent  = students.filter(student => student._id === result.studentId)[0]
      // console.log(selectedStudent);
      const name = selectedStudent.name
      alert (name)
    }
  }




  componentWillMount() {

    const batchId = this.props.match.params.batchId
    this.props.fetchOneBatch(batchId)
    this.props.fetchBatchStudents(batchId)
    this.props.fetchLatestBatchEvaluations(batchId)
    // this.setState({batches: this.props.batches})
  }


  render() {
    const {signedIn} = this.props
    if(!signedIn) {return null}
    // console.log(this.props);
    // const batchNames = this.props.batches
    // // const {batchnames} = this.props
    // console.log(this.props);
    const batchItems = this.props.batches.map(batch => batch)[0]
    const startDate = !!batchItems && new Date(batchItems.start_date).toDateString()
    const endDate = !!batchItems && new Date(batchItems.end_date).toDateString()
    // console.log(batchItems);
    return (
      <div>
        <RaisedButton onClick={this.getRandomStudent} label="get random student"/>
        <h2>name: {!!batchItems && batchItems.name}</h2>
        <h3>start date: {startDate}</h3>
        <h3>end date: {endDate}</h3>
        <pre>amount of students: { this.props.students.length}</pre>
        <StudentForm batchId={this.props.match.params.batchId}/>
        <StudentsContainer students={this.props.students} evaluations={this.props.evaluations}/>
      </div>
    )
  }

}




const mapDispatchToProps = { fetchOneBatch, fetchBatchStudents,
  fetchLatestBatchEvaluations, replace, push
  }

const mapStateToProps = ({batches, students, currentUser, evaluations}, {match}) => ({
  batches: batches,
  students: students,
  match: match,
  signedIn: !!currentUser && !!currentUser._id,
  evaluations: evaluations
})

export default connect(mapStateToProps, mapDispatchToProps)(BatchPage)
