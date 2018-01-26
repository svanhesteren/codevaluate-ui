// src/actions/recipes/fetch
import ApiClient from '../../api/client'
import {addLoading, removeLoading} from '../loading'
import loadError from '../loadError'
import {PATCHED_STUDENT} from '../student/student'
// import {replace, push} from 'react-router-redux'

export const FETCHED_EVALUATIONS = 'FETCHED_EVALUATIONS'
export const CREATE_EVALUATION = 'CREATE_EVALUATION'

const api = new ApiClient()


export const createEvaluation = (studentId, evaluation) => {

  return dispatch => {

    dispatch(addLoading(CREATE_EVALUATION))

    function endLoading() { dispatch(removeLoading(CREATE_EVALUATION)) }


    api.post(`students/${studentId}/evaluations`, evaluation)
      .then((res) => {
        dispatch({type: CREATE_EVALUATION, payload: res.body})
        // const studentEval = fetchStudentEvaluations(studentId)
        // console.log(this.state)

        // const patchForStudent = {
        //   latestEvalCode: evaluation.code,
        //   latestEvalDate: evaluation.date
        // }
        // api.patch(`students/${studentId}`, patchForStudent)
        //   .then(res => {
        //     dispatch({type: PATCHED_STUDENT, payload: patchForStudent})
        //     endLoading()
        //   })
        //   .catch(err => {
        //     dispatch(loadError(err))
        //     endLoading()
        //   })
      })
      .catch(err => {
        dispatch(loadError(err))
        endLoading()
      })
  }
}

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

export const fetchLatestEvaluation = (studentId) =>  {
  return dispatch => {

    dispatch(addLoading(FETCHED_EVALUATIONS))

    function endLoading() { dispatch(removeLoading(FETCHED_EVALUATIONS)) }

    console.log("Fetching latest student evaluation.......")

    return api.get(`students/${studentId}/evaluation`)
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
