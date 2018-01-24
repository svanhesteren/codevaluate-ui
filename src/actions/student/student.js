// src/actions/recipes/fetch
import ApiClient from '../../api/client'
import {addLoading, removeLoading} from '../loading'
import loadError from '../loadError'

export const FETCHED_STUDENTS = 'FETCHED_STUDENTS'

const api = new ApiClient()

export const fetchAllStudents = () =>  {
  return dispatch => {

    dispatch(addLoading(FETCHED_STUDENTS))

    function endLoading() { dispatch(removeLoading(FETCHED_STUDENTS)) }

    console.log("Fetching all students.......")

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

    dispatch(addLoading(FETCHED_STUDENTS))

    function endLoading() { dispatch(removeLoading(FETCHED_STUDENTS)) }

    console.log("Fetching batch students.......")

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

export const fetchOneStudent = (studentId) =>  {
  return dispatch => {

    dispatch(addLoading(FETCHED_STUDENTS))

    function endLoading() { dispatch(removeLoading(FETCHED_STUDENTS)) }

    console.log("Fetching one student.......")

    api.get(`students/${studentId}`)
      .then(res => {
        dispatch({ type: FETCHED_STUDENTS, payload: [res.body] })
        endLoading()
      })
      .catch(err => {
        dispatch(loadError(err))
        endLoading()
      })

  }
}
