import {
  LOGIN
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        accountID: action.error ? null : action.payload[0].logininfo.accountid,
        firstName: action.error ? null : action.payload[0].logininfo.firstname,
        lastName: action.error ? null : action.payload[0].logininfo.lastname,
      };
    default:
      return state;
  }
};
