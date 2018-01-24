import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { LinearProgress } from 'material-ui/Progress'

class Loading extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool
  }
  // renderMessage = () => {
  //
  //   if (this.props.loading) {return "Loading recipes from database..."}
  //   else { return ""}
  // }


  render() {
    const { loading } = this.props
    if(!loading) return null

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
