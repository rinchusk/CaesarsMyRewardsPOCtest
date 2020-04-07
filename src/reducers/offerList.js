import {
    GET_OFFER
  } from '../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_OFFER:
            return {
                ...state,
                offerList: action.error ? null : action.payload.offers,
              };
        default:
      return state;
  }
};