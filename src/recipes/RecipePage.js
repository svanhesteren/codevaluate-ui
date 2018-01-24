import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetch from '../actions/recipes/fetch'
import Title from '../components/Title'
import {Link} from 'react-router-dom'

export class RecipePage extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
  }

  componentWillMount() {
    this.props.fetch()
  }

  render() {
    console.log(this.props);
    const { title } = this.props

    if (!title) return null

    return(
      <div className="recipe page">
        <Title content={ title } />

        <p>{this.props.summary}</p>
        <Link to={'/'} type="button">
          <button type="button">
            Back
          </button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }, { match }) => {
  const recipe = recipes.reduce((prev, next) => {
    if (next._id === match.params.recipeId) {
      return next
    }
    return prev
  }, {})

  return {
    ...recipe
  }
}

const mapDispatchToProps = { fetch }

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage)
