import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../Title'
import BatchItem from './BatchItem'
import {fetchBatches} from '../../actions/batch/batch'

class BatchesContainer extends PureComponent {
  static propTypes = {
    batches: PropTypes.array
  }

  componentWillMount() {

    this.props.fetchBatches()
  }

  renderBatch = (batch, index) => {
    return <BatchItem key={index} { ...batch } />

  }

  render () {
    return (
      <div>
        {this.props.batches.map(this.renderBatch)}
      </div>
    )
  }


}

const mapStateToProps = ({ batches }) => ({ batches })

const mapDispatchToProps = {fetchBatches}
// Same as:
// const mapStoreToProps = (store) => {
//   return { recipes: store.recipes }
// }

export default connect(mapStateToProps, mapDispatchToProps )(BatchesContainer)
