import React, { createContext, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

// initial state
const initialState = {
	transactions: [],
	currency: "€"
}

//init firebase
const firebaseConfig = {
    apiKey: "AIzaSyDhcfi6uhayNWDvlxVwLHHSE8IGNw_HSfE",
    authDomain: "expensetracker-3051e.firebaseapp.com",
    databaseURL: "https://expensetracker-3051e.firebaseio.com",
    projectId: "expensetracker-3051e",
    storageBucket: "expensetracker-3051e.appspot.com",
    messagingSenderId: "922580633686",
    appId: "1:922580633686:web:5cf851bbff0fbc133013f7",
    measurementId: "G-6MK3X7515Q"
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.database()

// Create Context
export const GlobalContext = createContext(initialState);

//Provider Components
export const GlobalProvider = ({ children }) => {
	const [auth,setAuth] = useState(false)
	const [currency, setCurrency] = useState('$')
	const changeAuth = (value) => { setAuth(value) }
	const changeCurrency = (value) => { setCurrency(value) }
	
	return(
		<GlobalContext.Provider value={{
			changeAuth,
			db,
			auth,
			currency,
			changeCurrency
		}}>
			{ children }
		</GlobalContext.Provider>
	)
}