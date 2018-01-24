import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchOneBatch} from '../../actions/batch/batch'
import {fetchBatchStudents} from '../../actions/student/student'
import StudentsContainer from '../students/StudentsContainer'
// import Title from '../Title'
// import {Link} from 'react-router-dom'
import {batchShape} from './BatchItem'


export class BatchPage extends PureComponent {
  static propTypes = {
    batches: PropTypes.arrayOf(batchShape).isRequired,
  }


  componentWillMount() {
    const batchId = this.props.match.params.batchId
    this.props.fetchOneBatch(batchId)
    this.props.fetchBatchStudents(batchId)


  }


  render() {

    return (
      <div>
        <pre>{JSON.stringify(this.props.batches[0], null, 2)}</pre>
        <pre>amount of students: { this.props.students.length}</pre>
        <StudentsContainer students={this.props.students} />
      </div>
    )
  }

}




const mapDispatchToProps = { fetchOneBatch, fetchBatchStudents }

const mapStateToProps = ({batches, students}, {match}) => ({
  batches: batches,
  students: students,
  match: match
})

export default connect(mapStateToProps, mapDispatchToProps)(BatchPage)
