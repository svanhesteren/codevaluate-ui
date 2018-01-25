import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import Title from '../Title'
import BatchItem, {batchShape} from './BatchItem'
// import {fetchAllBatches} from '../../actions/batch/batch'
// import './BatchesContainer.css'
export class BatchesContainer extends PureComponent {
  static propTypes = {
    batches: PropTypes.arrayOf(batchShape).isRequired,
  }


  renderBatch = (batch, index) => {
    return <BatchItem key={index} { ...batch } />

  }

  render () {


    const style = {
      'display': 'flex',
      'flex-wrap': 'wrap'
    }

    return (
      <div className="batchesContainer" style={style} >
        {this.props.batches.map(this.renderBatch)}
      </div>
    )
  }

}

const mapStateToProps = ({ batches }) => ({ batches})


export default connect(mapStateToProps )(BatchesContainer)
