import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchAllBatches} from '../../actions/batch/batch'
// import {fetchBatchStudents} from '../../actions/student/student'
import BatchesContainer from './BatchesContainer'
import Title from '../Title'
import {batchShape} from './BatchItem'
import {replace, push} from 'react-router-redux'
// import {Link} from 'react-router-dom'


const TITLE_TEXT = "All current batches"

export class BatchesPage extends PureComponent {
  static propTypes = {
    batches: PropTypes.arrayOf(batchShape).isRequired,
    signedIn: PropTypes.bool.isRequired,
  }

  componentWillMount() {
    const { signedIn } = this.props
    if (signedIn) {
      this.props.fetchAllBatches()
    }
    else {
      this.props.replace("/sign-in")
    }

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


const mapDispatchToProps = { fetchAllBatches, replace, push }

const mapStateToProps = ({batches, currentUser}) => ({
  batches,
  signedIn: !!currentUser && !!currentUser._id
})

export default connect(mapStateToProps, mapDispatchToProps)(BatchesPage)
