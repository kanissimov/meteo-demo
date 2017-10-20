import {
  FETCH_CITY,
  REMOVE_CITY,
  FETCH_CONTEXT,
  REORDER_CITIES
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CONTEXT:
      return action.payload.cities || state;
    case FETCH_CITY:
      return action.payload &&
        !(state.findIndex(e => e.id === action.payload.id) >= 0)
        ? [action.payload, ...state]
        : state;
    case REMOVE_CITY:
      return state.filter(e => e.id !== action.payload);
    case REORDER_CITIES:
      const result = state.slice();
      const [removed] = result.splice(action.payload.sourceIndex, 1);
      result.splice(action.payload.targetIndex, 0, removed);
      return result;
    default:
      return state;
  }
}
