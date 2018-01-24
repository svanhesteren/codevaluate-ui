import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchAllBatches} from '../../actions/batch/batch'
// import {fetchBatchStudents} from '../../actions/student/student'
import BatchesContainer from './BatchesContainer'
import Title from '../Title'
import {batchShape} from './BatchItem'
// import {Link} from 'react-router-dom'


const TITLE_TEXT = "All current batches"

export class BatchesPage extends PureComponent {
  static propTypes = {
    batches: PropTypes.arrayOf(batchShape).isRequired,
  }

  componentWillMount() {
    // console.log(this.props.match.params.batchId);
    // const studentId = this.props.match.params.studentId
    this.props.fetchAllBatches()

  }

  render() {
    return (
      <div>
        <Title content={TITLE_TEXT} />
        <BatchesContainer batches={this.props.batches} />
      </div>
    )
  }

}


const mapDispatchToProps = { fetchAllBatches }

const mapStateToProps = ({batches}) => ({batches})

export default connect(mapStateToProps, mapDispatchToProps)(BatchesPage)
