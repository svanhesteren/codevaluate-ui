// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'


class StudentItem extends PureComponent {

  render() {
    return (
      <div>
        <div>
          <Link to={`/students/${this.props._id}`}>
            <pre>{JSON.stringify(this.props, null, 2)}</pre>
          </Link>
        </div>
      </div>
    )

  }
}

export default StudentItem
