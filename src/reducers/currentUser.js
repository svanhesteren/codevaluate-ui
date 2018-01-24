import { USER_SIGNED_IN } from '../actions/user/sign-in'
import { USER_SIGNED_OUT } from '../actions/user/sign-out'

const USER_KEY = 'currentUser'

const currentUserFromLocalStorage = JSON.parse(
  window.localStorage.getItem(USER_KEY) || 'null'
)

export default function(state = currentUserFromLocalStorage, action = {}) {
  switch(action.type) {
    case USER_SIGNED_IN:
    const currentUser = { ...action.payload }
    window.localStorage.setItem(USER_KEY, JSON.stringify(currentUser))
    return currentUser

    case USER_SIGNED_OUT:
      window.localStorage.removeItem(USER_KEY)
      return null
    default:
      return state
  }
}
