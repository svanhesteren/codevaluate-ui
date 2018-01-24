// src/actions/recipes/fetch
import ApiClient from '../../api/client'
import {addLoading, removeLoading} from '../loading'
import loadError from '../loadError'

export const FETCHED_BATCHES = 'FETCHED_BATCHES'

const api = new ApiClient()


export const fetchAllBatches = () =>  {
  return dispatch => {

    dispatch(addLoading(FETCHED_BATCHES))

    function endLoading() { dispatch(removeLoading(FETCHED_BATCHES)) }

    console.log("Fetching all batches.......")

    api.get('batches')
      .then(res => {
        dispatch({ type: FETCHED_BATCHES, payload: res.body })
        endLoading()
      })
      .catch(err => {
        dispatch(loadError(err))
        endLoading()
      })
  }
}
export const fetchOneBatch = (batchId) =>  {
  return dispatch => {

    dispatch(addLoading(FETCHED_BATCHES))

    function endLoading() { dispatch(removeLoading(FETCHED_BATCHES)) }

    console.log("Fetching one batch.......")

    api.get(`batches/${batchId}`)
      .then(res => {
        dispatch({ type: FETCHED_BATCHES, payload: [res.body] })
        endLoading()
      })
      .catch(err => {
        dispatch(loadError(err))
        endLoading()
      })




  }
}
