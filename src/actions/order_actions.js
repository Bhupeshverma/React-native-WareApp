import {
	FETCH_ORDERS,
	FETCHED_ORDERS,
	ERROR_RECIEVING_ORDERS
} from './types';
import axios from 'axios';

function isFetchingOrders() {
  return{
    type : FETCH_ORDERS
  }
}

function recievedOrders(data) {
    return{
      type : FETCHED_ORDERS,
      payload : data
    }
}

function recievedOrdersError() {
  return {
    type : ERROR_RECIEVING_ORDERS
  }
}

export function fetchOrders() {
 return (dispatch, getState) => {
   dispatch(isFetchingOrders());
   return axios.get(`https://jsonplaceholder.typicode.com/posts`)
   .then((response) => {
     dispatch(recievedOrders(response));
   })
    .catch((error) => {
     if (error.response) {
       if (error.response === 401) {
         dispatch(recievedOrdersError());
       }
     }
     else if (error.request) {
       dispatch(recievedOrdersError());
     } else {
       dispatch(recievedOrdersError());
     }
   })
 }
}
