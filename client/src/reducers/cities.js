import _ from 'lodash';
import { FETCH_CITY, REMOVE_CITY } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CITY:
      return action.payload ? [...state, action.payload] : state;
    case REMOVE_CITY:
      return _.filter(state, e => e.city.id === action.payload);
    default:
      return state;
  }
}
