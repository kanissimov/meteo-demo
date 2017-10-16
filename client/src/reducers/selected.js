import { SELECT_CITY } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SELECT_CITY:
      return action.payload || state;
    default:
      return state;
  }
}
