import { USER_SIGNED_IN, USER_SIGNED_OUT } from '../actions/user/sign-in'


export default function(state = null, action = {}) {
  switch(action.type) {
    case USER_SIGNED_IN:
      return {...action.payload}

    case USER_SIGNED_OUT:
      return null
    default:
      return state
  }
}
