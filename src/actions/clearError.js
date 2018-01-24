export const CLEARERROR = 'CLEARERROR'

export default (error) => {
  return {
    type: "CLEARERROR",
    payload: error
  }
}
