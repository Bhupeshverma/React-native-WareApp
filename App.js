import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import Router from './routes';
import store from './src/store/index';
import ReduxPromise from 'redux-promise';
import LoginForm from './src/screens/Auth/LoginForm'
import {ActivityIndicator } from 'react-native'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loggedIn : false
    }
  }
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAleDAcfMjG-ORf1d-cRTgydDaKJwnb5Tg",
    authDomain: "awsome-3cfcd.firebaseapp.com",
    databaseURL: "https://awsome-3cfcd.firebaseio.com",
    projectId: "awsome-3cfcd",
    storageBucket: "awsome-3cfcd.appspot.com",
    messagingSenderId: "925292593052"
    };

  firebase.initializeApp(config);

  }



  render() {
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

export default App;
