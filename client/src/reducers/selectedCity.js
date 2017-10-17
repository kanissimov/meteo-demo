import { SELECT_CITY, REMOVE_CITY } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SELECT_CITY:
      return action.payload || state;
    case REMOVE_CITY:
      return state === action.payload ? null : state;
    default:
      return state;
  }
}
