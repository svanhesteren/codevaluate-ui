export const ADD_LOADING = 'ADD_LOADING'
export const REMOVE_LOADING = 'REMOVE_LOADING'

export const addLoading = (status) => {
  return {
    type: ADD_LOADING,
    payload: status
  }
}

export const removeLoading = (status) => {
  return {
    type: REMOVE_LOADING,
    payload: status
  }
}
