import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Snackbar from 'material-ui/Snackbar';
import clearError from '../actions/clearError'

class ErrorItem extends PureComponent {
  constructor(props){
    super(props)
    this.state = {open: true}
  }

  handleRequestClose = () => {
    this.setState({ open: false});
    this.props.dispatch(clearError())
  }


  render() {
    const loadErrors = this.props.loaderrors
    // console.log(loadErrors);
    if (!loadErrors) {return null}

    return (
      <div className="LoadErrors">
      {loadErrors.map((error, index) =>
        <Snackbar
          key={index}
          message={error}
          open={this.state.open}
          autoHideDuration={5000}
          onClose={this.handleRequestClose}
          anchorOrigin={{vertical: 'top', horizontal: 'center' }} /> )}
      </div>
    )
  }


}
const mapStateToProps = ({loaderrors}) => ({loaderrors})

export default connect(mapStateToProps)(ErrorItem)
