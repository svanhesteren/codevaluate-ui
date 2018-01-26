import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import StudentItem from './StudentItem'
import {fetchLatestEvaluation} from '../../actions/evaluation/evaluation'

class StudentsContainer extends PureComponent {
  static propTypes = {
    students: PropTypes.array
  }

  // componentWillMount() {
    // console.log(this.props.students);
    // if(this.props.students.length <= 0){
    //
    //   this.props.fetchAllStudents()
    // }
    // console.log(this.props);
  // }

  renderStudent = (student, index) => {

      const evaluation = this.props.evaluations.filter(evaluation => !!evaluation && student._id === evaluation.studentId)[0]

      return <StudentItem key={index} evaluation={evaluation} { ...student } />

  }

  render () {

    const style = {
      'display': 'flex',
      'flexWrap': 'wrap'
    }

    return (
      <div style={style}>
        {this.props.students.map(this.renderStudent)}
      </div>
    )
  }

}

const mapStateToProps = ({ students, evaluations }) => ({ students, evaluations })

// const mapDispatchToProps = {fetchAllStudents}


export default connect(mapStateToProps, {fetchLatestEvaluation} )(StudentsContainer)
