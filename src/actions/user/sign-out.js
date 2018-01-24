import ApiClient from '../../api/client'
import { push } from 'react-router-redux'


const api = new ApiClient()

export const USER_SIGNED_OUT = "USER_SIGNED_OUT"

export default () => {
  return dispatch => {
    api.signOut()
    dispatch(push('/sign-in'))
    dispatch({ type: USER_SIGNED_OUT })
  }
}
