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
    console.log(batchItems);
    return (
      <div>
        <h2>name: {!!batchItems && batchItems.name}</h2>
        <h3>start date: {!!batchItems && batchItems.start_date}</h3>
        <h3>end date: {!!batchItems && batchItems.end_date}</h3>
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
