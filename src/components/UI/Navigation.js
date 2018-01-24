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

const TITLE = 'MEMORY'

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
      <div className={styles.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton styles={styles.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography type="title" color="inherit" styles={styles.flex}>
                  Title
                </Typography>
                {signedIn ?
                  <Button color="inherit">Logout</Button> :
                  <Button color="inherit">Login</Button>
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

export default connect(mapStateToProps)(Navigation)
