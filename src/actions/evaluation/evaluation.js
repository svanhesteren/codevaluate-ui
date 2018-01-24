// src/actions/recipes/fetch
import ApiClient from '../../api/client'
import loading from '../loading'
import loadError from '../loadError'

export const FETCHED_EVALUATONS = 'FETCHED_EVALUATONS'

const api = new ApiClient()


export const fetchAllEvaluations = () =>  {
  return dispatch => {

    dispatch(loading(true))

    function endLoading() { dispatch(loading(false)) }

    console.log("Fetching all evaluations.......")

    api.get('evaluations')
      .then(res => {
        dispatch({ type: FETCHED_EVALUATONS, payload: res.body })
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

    dispatch(loading(true))

    function endLoading() { dispatch(loading(false)) }

    console.log("Fetching student evaluations.......")

    api.get(`students/${studentId}/evaluations`)
      .then(res => {
        dispatch({ type: FETCHED_EVALUATONS, payload: [...res.body] })
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

    dispatch(loading(true))

    function endLoading() { dispatch(loading(false)) }

    console.log("Fetching one evaluation.......")

    api.get(`evaluations/${evalId}`)
      .then(res => {
        dispatch({ type: FETCHED_EVALUATONS, payload: [res.body] })
        endLoading()
      })
      .catch(err => {
        dispatch(loadError(err))
        endLoading()
      })

  }
}
