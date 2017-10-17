import { FETCH_CITY, REMOVE_CITY } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CITY:
      return action.payload &&
        !(state.findIndex(e => e.city.id === action.payload.city.id) >= 0)
        ? [...state, action.payload]
        : state;
    case REMOVE_CITY:
      return state.filter(e => e.city.id !== action.payload);
    default:
      return state;
  }
}
