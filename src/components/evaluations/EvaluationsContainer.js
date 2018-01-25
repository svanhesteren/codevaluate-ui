import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import EvaluationItem from './EvaluationItem'
// import {fetchAllStudents} from '../../actions/student/student'

class EvaluationsContainer extends PureComponent {
  static propTypes = {
    evaluations: PropTypes.array
  }

  componentWillMount() {
    // console.log(this.props.evaluations);
    // if(this.props.students.length <= 0){
    //
    //   this.props.fetchAllStudents()
    // }
    // console.log(this.props);
  }

  renderEvaluation = (evaluation, index) => {
    return <EvaluationItem key={index} { ...evaluation } />
  }

  render () {
    return (
      <div>
        {this.props.evaluations.map(this.renderEvaluation)}
      </div>
    )
  }

}

const mapStateToProps = ({ evaluations }) => ({ evaluations })

// const mapDispatchToProps = {fetchAllStudents}


export default connect(mapStateToProps )(EvaluationsContainer)
