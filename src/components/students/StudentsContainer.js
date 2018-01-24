import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import StudentItem from './StudentItem'
import {fetchAllStudents} from '../../actions/student/student'

class StudentsContainer extends PureComponent {
  static propTypes = {
    students: PropTypes.array
  }

  componentWillMount() {
    console.log(this.props.students);
    // if(this.props.students.length <= 0){
    //
    //   this.props.fetchAllStudents()
    // }
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

const mapDispatchToProps = {fetchAllStudents}


export default connect(mapStateToProps, mapDispatchToProps )(StudentsContainer)
