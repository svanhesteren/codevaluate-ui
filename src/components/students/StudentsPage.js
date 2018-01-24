import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchAllStudents} from '../../actions/student/student'
// import {fetchBatchStudents} from '../../actions/student/student'
import StudentsContainer from './StudentsContainer'
// import Title from '../components/Title'
import {Link} from 'react-router-dom'

export class StudentsPage extends PureComponent {
  // static propTypes = {
  //   title: PropTypes.string,
  // }

  componentWillMount() {
    // console.log(this.props.match.params.batchId);
    // const studentId = this.props.match.params.studentId
    this.props.fetchAllStudents()

  }

  render() {
    return (
      <div>
        <h1>hi this is the all students Page</h1>
        <StudentsContainer students={this.props.students} />
      </div>
    )
  }

}


const mapDispatchToProps = { fetchAllStudents }

const mapStateToProps = ({students}) => ({students})

export default connect(mapStateToProps, mapDispatchToProps)(StudentsPage)
