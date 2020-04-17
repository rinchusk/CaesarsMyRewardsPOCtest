import {filterOffers, updateSelectedFilter} from '../utilities/Filter'
import {
  LOGIN,
  FILTER_OFFER
} from '../constants/actionTypes';

const defaultState = {
  appName: 'Caesars MyRewards',
  accountID: null,
  token: null,
  offers: [],
  filteredOffers: [],
  selectedOfferFilters: [],
  markets: [],
  properties: [],
  reservations: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        accountID: action.error ? null : action.payload[0].logininfo.accountid,
        firstName: action.error ? null : action.payload[0].logininfo.firstname,
        lastName: action.error ? null : action.payload[0].logininfo.lastname,
        token: action.error ? null : action.payload[0].logininfo.token,
        offers: action.error ? [] : action.payload[1].offers,
        filteredOffers: action.error ? [] : action.payload[1].offers,
        markets: action.error ? [] : action.payload[2].GetMarketsResult,
        properties: action.error? [] : action.payload[3],
        reservations: action.error? []: action.payload[4]
      };
    case FILTER_OFFER:
      const newFilter = {
        filterType: action.filterType,
        filterValue: action.filterValue
      };
      const updatedFilters = updateSelectedFilter(state.selectedOfferFilters, newFilter);
      return {
        ...state,
        selectedOfferFilters: updatedFilters,
        filteredOffers: filterOffers(state.offers, updatedFilters)
      };
    default:
      return state;
  }
};
