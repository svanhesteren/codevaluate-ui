import { LOADERROR } from '../actions/loadError'
import { CLEARERROR } from '../actions/clearError'


export default function(state = [], action = {}) {
  switch(action.type) {
    case LOADERROR:
      if (action.payload instanceof Error){
        return state.concat(action.payload.message)
      }
      if (action.payload instanceof String){
        return state.concat(action.payload)
      }
      else{
        return state
      }
      
    case CLEARERROR:
      return []
    default:
      return state
  }
}
