// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'

const style2 = {
  display: 'flex',
  flexWrap: 'wrap',
  // flex: 1,
  width: 200,
  height: 200,
  margin: '10px 10px',
  padding: 20
}

const YELLOW = '#ffcc00'
const RED = '#990000'
const GREEN = '#33cc33'


class EvaluationItem extends PureComponent {


  render() {


    const code = this.props.code
    var codeColor = ""
    switch(code) {
      case "Green":
        codeColor = GREEN
        break
      case "Yellow":
        codeColor = YELLOW
        break
      case "Red":
        codeColor = RED
        break
      default:
        codeColor = "#ffffff"
    }

    var evalDate = new Date(this.props.date).toDateString()
    var tempDate = new Date(evalDate)
    // console.log(tempDate);

    return (
      <div style={style2}>

        <Paper style={{padding: 30, width: 200, 'backgroundColor': `${codeColor}`}}>
        <h5>Date: {evalDate}</h5>
        <pre>{this.props.remark}</pre>
        <pre>by: {this.props.userName} </pre>

        </Paper>
      </div>
    )

  }
}

export default EvaluationItem
