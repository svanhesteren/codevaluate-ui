import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import LinearProgress from 'material-ui/LinearProgress';

class Loading extends PureComponent {
  static propTypes = {
    loading: PropTypes.array
  }


  render() {
    const loading = this.props.loading
    if(loading.length <= 0) return null

    return (
      <div className="Loading" style={{width: '100%'}}>
      <LinearProgress />
      </div>
    )
  }

}

const mapStateToProps = ({loading}) => ({
  loading
})

export default connect(mapStateToProps)(Loading)
