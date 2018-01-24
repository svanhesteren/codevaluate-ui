// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'


class BatchItem extends PureComponent {

  render() {
    return (
      <div>
        <h3>batch item</h3>
      </div>
    )

  }
}

export default BatchItem
