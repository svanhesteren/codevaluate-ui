import ApiClient from '../../api/client'

export const USER_SIGNED_IN = "USER_SIGNED_IN"
export const USER_SIGNED_OUT = "USER_SIGNED_OUT"

const api = new ApiClient()

export const userSignIn = (user) => {
  return dispatch => {
    // console.log({...user});
    api.post('sessions', {...user})
      .then((response) => {
        api.storeToken(response.body.token)
        // console.log(localStorage);


      }).catch((error) => console.log(error))

    api.get('users/me')
    // .header('Access-Control-Allow-Origin', '*')
    // .set('Authorization', `Bearer ${localStorage.recipeApiJWT}`)
    .then((response) => {
      dispatch( {type: USER_SIGNED_IN, payload: {name: response.body.name, email: response.body.email, id:response.body._id} } )
      console.log(response)
    })
    .catch((error) => console.log(error))


  }
}
export const userSignOut = () => {
  api.removeToken()
}

//dispatch({type: USER_SIGNED_IN, payload: {user: response.body}})
