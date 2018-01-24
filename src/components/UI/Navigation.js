// src/components/ui/Navigation.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
// import GameIcon from 'material-ui/svg-icons/hardware/videogame-asset'
import Button from 'material-ui/Button'
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const TITLE = 'MEMORY'

class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  signOut = (event) => {
    event.preventDefault()
    // implement later
  }

  signUp = () => {
    // implement later
  }

  goHome = () => {
    // implement later
  }

  render() {
    const { signedIn } = this.props
    return (
      <AppBar position="static" color="default">
      <Toolbar>
         <Typography type="title" color="inherit">
           Title
         </Typography>
       </Toolbar>
      </AppBar>
    )
  }
}



const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps)(Navigation)
