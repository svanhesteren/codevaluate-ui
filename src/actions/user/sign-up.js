import ApiClient from '../../api/client'


const api = new ApiClient()

export const SINGUP = 'SIGNUP'
export default (user) => {
  return dispatch => {
    // console.log({...user});
    api.post('users', {...user}).then(res => dispatch({type: SINGUP, payload: {user: res.body}}))

  }
}
