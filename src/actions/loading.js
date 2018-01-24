export const LOADING = 'LOADING'

export default (status) => {
  return {
    type: "LOADING",
    payload: status
  }
}
