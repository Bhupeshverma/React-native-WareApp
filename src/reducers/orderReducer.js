import {
  FETCH_ORDERS,
  FETCHED_ORDERS,
  ERROR_RECIEVING_ORDERS
} from '../actions/types';

const INITIAL_STATE = {
  spinner : false ,
  orders : null,
  error : false
}

export default function (state=INITIAL_STATE , action) {
  switch (action.type) {
    case FETCH_ORDERS:
      return { ...state , spinner : true };
    case FETCHED_ORDERS:
      return { ...state , spinner : false , orders : action.payload.data, error : false}
    case ERROR_RECIEVING_ORDERS:
      return { ...state , spinner : false , error : true }
    default:
      return state;
  }
}
