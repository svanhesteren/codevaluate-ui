import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchOneBatch} from '../../actions/batch/batch'
// import Title from '../components/Title'
import {Link} from 'react-router-dom'

export class BatchPage extends PureComponent {
  // static propTypes = {
  //   title: PropTypes.string,
  // }

  componentWillMount() {
    // console.log(this.props.match.params.batchId);
    const batchId = this.props.match.params.batchId
    this.props.fetchOneBatch(batchId)
  }

  render() {
    return (
      <div>
        <h1>hi this is batchpage</h1>
        <pre>{JSON.stringify(this.props.batches[0], null, 2)}</pre>
      </div>
    )
  }

}




const mapDispatchToProps = { fetchOneBatch }

const mapStateToProps = ({batches}, {match}) => ({batches, match})

export default connect(mapStateToProps, mapDispatchToProps)(BatchPage)
