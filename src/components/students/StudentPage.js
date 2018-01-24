import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchOneBatch} from '../../actions/batch/batch'
import {fetchBatchStudents} from '../../actions/student/student'
import StudentsContainer from '../students/StudentsContainer'
// import Title from '../components/Title'
import {Link} from 'react-router-dom'

export class StudentPage extends PureComponent {
  // static propTypes = {
  //   title: PropTypes.string,
  // }

  componentWillMount() {
    // console.log(this.props.match.params.batchId);
    const batchId = this.props.match.params.batchId
    this.props.fetchOneBatch(batchId)
    console.log(this.props);
    if(this.props.batches) {
      this.props.fetchBatchStudents(batchId)
    }

  }

  render() {
    return (
      <div>
        <h1>hi this is batchpage</h1>
        <pre>{JSON.stringify(this.props.batches[0], null, 2)}</pre>
        <StudentsContainer students={this.props.students} />
      </div>
    )
  }

}




const mapDispatchToProps = { fetchOneBatch, fetchBatchStudents }

const mapStateToProps = ({batches}, {match}) => ({batches, match})

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage)
