// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar';

const style2 = {
  // display: 'flex',
  // flexWrap: 'wrap',
  // flex: 1,
  width: 200,
  height: 200,
  margin: '10px 10px',
  padding: 20
}

class StudentItem extends PureComponent {


  render() {
    return (
      <div style={style2}>
          <Link style={{textDecoration:'none'}} to={`/students/${this.props._id}`}>
            <Paper style={{padding: 30}}>
            <h4>{this.props.name}</h4>
            <Avatar size={100} src={this.props.picture} alt="student"/>
            </Paper>
          </Link>
      </div>
    )

  }
}

export default StudentItem
