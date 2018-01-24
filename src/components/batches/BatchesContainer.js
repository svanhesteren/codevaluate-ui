import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import Title from '../Title'
import BatchItem, {batchShape} from './BatchItem'
// import {fetchAllBatches} from '../../actions/batch/batch'

class BatchesContainer extends PureComponent {
  static propTypes = {
    batches: PropTypes.arrayOf(batchShape).isRequired,
  }



  renderBatch = (batch, index) => {
    return <BatchItem key={index} { ...batch } />

  }

  render () {
    return (
      <div className="batchesContainer">
        {this.props.batches.map(this.renderBatch)}
      </div>
    )
  }

}

const mapStateToProps = ({ batches }) => ({ batches })



export default connect(mapStateToProps )(BatchesContainer)
