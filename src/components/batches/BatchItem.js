// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import { push } from 'react-router-redux'

export const batchShape = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    userId: PropTypes.string.isRequired,

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

// const style = {
//   height: 300,
//   width: 400,
//   margin: 100,
//   textAlign: 'center',
//   display: 'inline-block',
// };

const style2 = {
  // display: 'flex',
  // flex: 1,
  'flexWrap': 'wrap',
  // width: 400,
  // height: 405,
  margin: '10px 10px',
  padding: 10,
  cursor: 'pointer'
}
export class BatchItem extends PureComponent {


  static propTypes = {
    ...batchShape.isRequired,
    // push: PropTypes.func
  }

  visitBatch = batchId => event => {
    // event.preventDefault()
    this.props.push(`/batches/${batchId}`)
  }


  render() {

    return (
      <div style={style2}>

            <Paper style={{padding: 70}} onClick={this.visitBatch(this.props._id).bind(this)} >
            <h4>Batch: {this.props.name}</h4>
            </Paper>

      </div>
    )

  }
}

export default connect(null, {push})(BatchItem)
