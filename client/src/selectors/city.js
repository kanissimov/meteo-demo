import { createSelector } from 'reselect';

export default createSelector(
  state => state.cities || [],
  state => state.selectedCity,
  (cities, selectedCity) => cities.find(city => city.id === selectedCity) || {}
);
