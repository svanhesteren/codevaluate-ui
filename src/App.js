import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ErrorItem from './components/ErrorItem'
import Loading from './components/Loading'
import './App.css'
import Routes from './routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './styles/theme'
import Navigation from './components/UI/Navigation'
import { createMuiTheme } from 'material-ui/styles';
// src/App.js

const theme = createMuiTheme();

class App extends Component {

  // static childContextTypes = {
  //   muiTheme: PropTypes.object.isRequired,
  // }
  //
  // getChildContext() {
  //   return { muiTheme }
  // }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Loading />
          <ErrorItem />
          <Navigation />
          <Routes />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
