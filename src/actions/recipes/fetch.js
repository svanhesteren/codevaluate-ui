// src/actions/recipes/fetch
import ApiClient from '../../api/client'
import loading from '../loading'
import loadError from '../loadError'

export const FETCHED_RECIPES = 'FETCHED_RECIPES'

const api = new ApiClient()

export default () => {
  return dispatch => {
    dispatch(loading(true))

    function endLoading() { dispatch(loading(false)) }

    api.get('recipes')
      .then(res => {
        dispatch({ type: FETCHED_RECIPES, payload: res.body })
        // dispatch(loading(false))
        endLoading()
      })
      .catch(err => {
        dispatch(loadError(err))
        // dispatch(clearErrors())
        endLoading()
      })




  }
}
