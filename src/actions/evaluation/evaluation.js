// src/actions/recipes/fetch
import ApiClient from '../../api/client'
import {addLoading, removeLoading} from '../loading'
import loadError from '../loadError'

export const FETCHED_EVALUATIONS = 'FETCHED_EVALUATIONS'

const api = new ApiClient()


export const fetchAllEvaluations = () =>  {
  return dispatch => {

    dispatch(addLoading(FETCHED_EVALUATIONS))

    function endLoading() { dispatch(removeLoading(FETCHED_EVALUATIONS)) }

    console.log("Fetching all evaluations.......")

    api.get('evaluations')
      .then(res => {
        dispatch({ type: FETCHED_EVALUATIONS, payload: res.body })
        endLoading()
      })
      .catch(err => {
        dispatch(loadError(err))
        endLoading()
      })
  }
}
export const fetchStudentEvaluations = (studentId) =>  {
  return dispatch => {

    dispatch(addLoading(FETCHED_EVALUATIONS))

    function endLoading() { dispatch(removeLoading(FETCHED_EVALUATIONS)) }

    console.log("Fetching student evaluations.......")

    api.get(`students/${studentId}/evaluations`)
      .then(res => {
        dispatch({ type: FETCHED_EVALUATIONS, payload: [...res.body] })
        endLoading()
      })
      .catch(err => {
        dispatch(loadError(err))
        endLoading()
      })
  }
}

export const fetchOneEvaluation = (evalId) =>  {
  return dispatch => {

    dispatch(addLoading(FETCHED_EVALUATIONS))

    function endLoading() { dispatch(removeLoading(FETCHED_EVALUATIONS)) }

    console.log("Fetching one evaluation.......")

    api.get(`evaluations/${evalId}`)
      .then(res => {
        dispatch({ type: FETCHED_EVALUATIONS, payload: [res.body] })
        endLoading()
      })
      .catch(err => {
        dispatch(loadError(err))
        endLoading()
      })

  }
}
