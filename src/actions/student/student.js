// src/actions/recipes/fetch
import ApiClient from '../../api/client'
import loading from '../loading'
import loadError from '../loadError'

export const FETCHED_STUDENTS = 'FETCHED_STUDENTS'

const api = new ApiClient()

export const fetchAllStudents = () =>  {
  return dispatch => {

    dispatch(loading(true))

    function endLoading() { dispatch(loading(false)) }

    api.get('students')
      .then(res => {
        dispatch({ type: FETCHED_STUDENTS, payload: res.body })
        endLoading()
      })
      .catch(err => {
        dispatch(loadError(err))
        endLoading()
      })
  }
}
export const fetchBatchStudents = (batchId) =>  {
  return dispatch => {

    dispatch(loading(true))

    function endLoading() { dispatch(loading(false)) }

    api.get(`batches/${batchId}/students`)
      .then(res => {
        dispatch({ type: FETCHED_STUDENTS, payload: [...res.body] })
        endLoading()
      })
      .catch(err => {
        dispatch(loadError(err))
        endLoading()
      })
  }
}
