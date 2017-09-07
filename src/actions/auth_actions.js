import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

function  isFetchingUsers() {
  return{
    type : LOGIN_USER
  }
}

function  recievedUsers(user) {
    return{
      type : LOGIN_USER_SUCCESS,
      payload : user
    }
}

function  recievedUsersError() {
  return {
    type : LOGIN_USER_FAIL
  }
}
export  function loginUser(email, password){
  return (dispatch, getState) =>{
    dispatch(isFetchingUsers());

    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user)
      dispatch(recievedUsers(user));
      Actions.Main({user: user})
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
