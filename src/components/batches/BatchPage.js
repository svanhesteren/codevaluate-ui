import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchOneBatch} from '../../actions/batch/batch'
import {fetchBatchStudents} from '../../actions/student/student'
import StudentsContainer from '../students/StudentsContainer'
// import Title from '../Title'
// import {Link} from 'react-router-dom'
import {batchShape} from './BatchItem'
import {replace, push} from 'react-router-redux'

export class BatchPage extends PureComponent {
  static propTypes = {
    batches: PropTypes.arrayOf(batchShape).isRequired,
    signedIn: PropTypes.bool.isRequired,
  }


  componentWillMount() {
    const batchId = this.props.match.params.batchId
    this.props.fetchOneBatch(batchId)
    this.props.fetchBatchStudents(batchId)

  }


  render() {
    const {signedIn} = this.props
    if(!signedIn) {return null}
    
    return (
      <div>
        <pre>{JSON.stringify(this.props.batches[0], null, 2)}</pre>
        <pre>amount of students: { this.props.students.length}</pre>
        <StudentsContainer students={this.props.students} />
      </div>
    )
  }

}




const mapDispatchToProps = { fetchOneBatch, fetchBatchStudents, replace, push }

const mapStateToProps = ({batches, students, currentUser}, {match}) => ({
  batches: batches,
  students: students,
  match: match,
  signedIn: !!currentUser && !!currentUser._id
})

export default connect(mapStateToProps, mapDispatchToProps)(BatchPage)
