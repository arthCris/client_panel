import {createStore, combineReducers, compose} from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import {reduxFirestore, firestoreReducer} from 'redux-firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA5_PHbcbQDKk-4iBE33qBRhox8aWICd9s",
    authDomain: "reactclientpanel-fc1ae.firebaseapp.com",
    databaseURL: "https://reactclientpanel-fc1ae.firebaseio.com",
    projectId: "reactclientpanel-fc1ae",
    storageBucket: "reactclientpanel-fc1ae.appspot.com",
    messagingSenderId: "887948589441",
    appId: "1:887948589441:web:6c1141c8744ddfaf"
}
