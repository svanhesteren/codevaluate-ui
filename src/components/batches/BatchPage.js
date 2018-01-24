import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchOneBatch} from '../../actions/batch/batch'
import {fetchBatchStudents} from '../../actions/student/student'
import StudentsContainer from '../students/StudentsContainer'
// import Title from '../components/Title'
import {Link} from 'react-router-dom'

export class BatchPage extends PureComponent {
  // static propTypes = {
  //   title: PropTypes.string,
  // }

  componentWillMount() {
    // console.log(this.props.match.params.batchId);
    const batchId = this.props.match.params.batchId
    this.props.fetchOneBatch(batchId)
    this.props.fetchBatchStudents(batchId)

    // console.log("batches", this.props);

    // if(this.props.batches) {
    // }

  }
  componentDidMount() {

  }
  render() {
    // console.log(this.props.students);
    // console.log(this.props.batches);
    return (
      <div>
        <h1>hi this is batchpage</h1>
        <pre>{JSON.stringify(this.props.batches[0], null, 2)}</pre>
        <pre>amount of students: { this.props.students.length}</pre>
        <StudentsContainer students={this.props.students} />
      </div>
    )
  }

}




const mapDispatchToProps = { fetchOneBatch, fetchBatchStudents }

const mapStateToProps = ({batches, students}, {match}) => ({batches, students, match})

export default connect(mapStateToProps, mapDispatchToProps)(BatchPage)
