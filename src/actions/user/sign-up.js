import ApiClient from '../../api/client'
import signIn from './sign-in'

const api = new ApiClient()

export const SINGUP = 'SIGNUP'

export default (user) => {
  return dispatch => {
    // console.log({...user});
    api.post('users', {...user})
      .then(res => {
        // dispatch({type: SINGUP, payload: {user: res.body}})
        dispatch(signIn(user))
      })

  }
}
