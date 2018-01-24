import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import StudentItem from './StudentItem'
// import {fetchStudents} from '../../actions/student/student'

class StudentsContainer extends PureComponent {
  static propTypes = {
    students: PropTypes.array
  }

  componentWillMount() {
    // this.props.fetchAllStudents()
    // console.log(this.props);
  }

  renderStudent = (student, index) => {
    return <StudentItem key={index} { ...student } />

  }

  render () {
    return (
      <div>
        {this.props.students.map(this.renderStudent)}
      </div>
    )
  }

}

const mapStateToProps = ({ students, match }) => ({ students, match })

// const mapDispatchToProps = {fetchStudents}


export default connect(mapStateToProps )(StudentsContainer)
