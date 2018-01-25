import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchAllBatches} from '../../actions/batch/batch'
// import {fetchBatchStudents} from '../../actions/student/student'
import BatchesContainer from './BatchesContainer'
import Title from '../Title'
import {batchShape} from './BatchItem'
import {replace, push} from 'react-router-redux'
import {BatchForm} from './BatchForm'
// import {Link} from 'react-router-dom'


const TITLE_TEXT = "All current batches"

export class BatchesPage extends PureComponent {
  static propTypes = {
    batches: PropTypes.arrayOf(batchShape).isRequired,
    signedIn: PropTypes.bool.isRequired,
  }



  componentWillMount() {
      this.props.fetchAllBatches()
  }


  render() {
    const {signedIn} = this.props
    if(!signedIn) {return null}

    return (
      <div>
        <Title content={TITLE_TEXT} />
        <BatchesContainer batches={this.props.batches} />
        <BatchForm />
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
