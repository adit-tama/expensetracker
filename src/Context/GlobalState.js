import React, { createContext, useReducer, useState } from 'react';
import AppReducer from './AppReducer';
import * as firebase from 'firebase';

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
const transactionsData = db.ref('users/praditya/transactions');


// Create Context
export const GlobalContext = createContext(initialState);

//Provider Components
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer,initialState);
	const [test,setTest] = useState(false)

	function deleteTransaction(id) {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id,
		})
	}

	function addTransaction(data) {
		setTest(prevState => !prevState)
	}

	function setCurrency(data) {
		dispatch({
			type: 'SET_CURRENCY',
			payload: data,
		})
	}

	return(
		<GlobalContext.Provider value={{
			test,
			transactionsData,
			transactions: state.transactions,
			currency: state.currency,
			setCurrency,
			deleteTransaction,
			addTransaction
		}}>
			{ children }
		</GlobalContext.Provider>
	)
}