// src/actions/recipes/fetch
import ApiClient from '../../api/client'
import {addLoading, removeLoading} from '../loading'
import loadError from '../loadError'
// import {replace} from 'react-router-redux'

export const FETCHED_BATCHES = 'FETCHED_BATCHES'
export const CREATE_BATCH = 'CREATE_BATCH'

const api = new ApiClient()

export const createBatch = (batch) => {

  return dispatch => {

    dispatch(addLoading(CREATE_BATCH))

    function endLoading() { dispatch(removeLoading(CREATE_BATCH)) }


    api.post('batches', batch)
      .then((res) => {
        dispatch({type: CREATE_BATCH, payload: res.body})
        endLoading()
      })
      .catch(err => {
        dispatch(loadError(err))
        endLoading()
      })
  }
}





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
