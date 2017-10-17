import { FETCH_CONTEXT } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    //    case FETCH_USER:
    //      return action.payload || false;
    case FETCH_CONTEXT:
      return action.payload.user || false;
    default:
      return state;
  }
}
