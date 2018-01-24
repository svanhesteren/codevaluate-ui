export const LOADERROR = 'LOADERROR'

export default (error) => {
  return {
    type: "LOADERROR",
    payload: error
  }
}
