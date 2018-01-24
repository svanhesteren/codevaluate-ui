// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

export const batchShape = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    userId: PropTypes.string.isRequired
})


// export const recipeShape = PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     photo: PropTypes.string,
//     vegan: PropTypes.bool,
//     vegetarian: PropTypes.bool,
//     pescatarian: PropTypes.bool,
//     liked: PropTypes.bool
// })

class BatchItem extends PureComponent {

  static propTypes = {
    ...batchShape.isRequired
  }
  render() {
    return (
      <div>
        <div>
          <Link to={`/batches/${this.props._id}`}>
            <pre>{JSON.stringify(this.props, null, 2)}</pre>
          </Link>
        </div>
      </div>
    )

  }
}

export default BatchItem
