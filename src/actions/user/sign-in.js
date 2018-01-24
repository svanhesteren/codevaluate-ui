import ApiClient from '../../api/client'
import { replace } from 'react-router-redux'
import {addLoading, removeLoading} from '../loading'
import loadError from '../loadError'

export const USER_SIGNED_IN = "USER_SIGNED_IN"


const api = new ApiClient()

export default (user) => {
  return dispatch => {
    function endLoading() { dispatch(removeLoading(USER_SIGNED_IN)) }
    // console.log({...user});
    dispatch(addLoading(USER_SIGNED_IN))

    // api.authenticate(user.email, user.password)
    api.post('sessions', {...user})
      .then((response) => {
        const jwt  = response.body.token
        api.storeToken(jwt)

        dispatch(replace('/'))

      })
      .catch((error) => {
        endLoading()
        dispatch(loadError(error))
      })

      api.get('users/me')

      .then(response => {
        dispatch( {
          type: USER_SIGNED_IN,
          payload: {
            name: response.body.name,
            email: response.body.email,
            _id:response.body._id
          }
        })
        endLoading()
      })
    .catch(error => {
      endLoading()
      dispatch(loadError(error))
    })


  }
}
