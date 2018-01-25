// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import { push } from 'react-router-redux'

export const batchShape = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    userId: PropTypes.string.isRequired,
    push: PropTypes.func.isRequired
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

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const style2 = {
  display: 'flex',
'flex-wrap': 'wrap',
  width: 200,
  height: 205,
  margin: '10px 10px'
}
class BatchItem extends PureComponent {


  static propTypes = {
    ...batchShape.isRequired
  }

  visitBatch = batchId => event => {
    event.preventDefault()
    this.props.push(`/batches/${batchId}`)
  }


  render() {

    return (
      <div style={style2}>

            <Paper style={style} onClick={this.visitBatch(this.props._id)} >
            <h4>Batch: {this.props.name}</h4>
            </Paper>

      </div>
    )

  }
}

export default connect(null, {push})(BatchItem)
