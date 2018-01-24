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
// import { withStyles } from 'material-ui/styles';
import MenuIcon from 'material-ui-icons/Menu';
// import ApiClient from '../../api/client'
import signOut from '../../actions/user/sign-out'
import { push } from 'react-router-redux'
// const api = new ApiClient()

// const TITLE = 'MEMORY'

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
    push: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired
  }

  signIn = () => {
    this.props.push('/sign-in')

  }
  signOut = (event) => {
    event.preventDefault()
    this.props.signOut()
    // implement later
  }

  signUp = () => {
    // implement later
    this.props.push('/sign-up')

  }

  goHome = () => {
    this.props.push('/')
    // implement later
  }

  render() {
    console.log("sign", this.props);
    const { signedIn } = this.props
    return (
      <div className={styles.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton styles={styles.menuButton} onClick={this.goHome} color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography type="title" color="inherit" styles={styles.flex}>
                  Title
                </Typography>
                {signedIn ?
                  <Button color="inherit" onClick={this.signOut.bind(this)}>Log Out</Button> :
                  <div>
                  <Button color="inherit" onClick={this.signIn}>Log In</Button>
                  <Button color="inherit" onClick={this.signUp}>Sign up</Button>
                  </div>
                }
              </Toolbar>
            </AppBar>
          </div>
    )
  }
}



const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})


export default connect(mapStateToProps, { push, signOut })(Navigation)
