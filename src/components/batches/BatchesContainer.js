import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../Title'
import BatchItem from './BatchItem'

class BatchesContainer extends PureComponent {
  static propTypes = {
    batches: PropTypes.array
  }

  componentWillMount() {

    this.props.fetchBatches() // or:
    // this.props.dispatch(fetch()) //if not using mapDispatchToProps
  }


  render () {
    return (
      <div>
        <BatchItem />
      </div>
    )
  }





}

export default BatchesContainer
