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
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DBURL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSENGER,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MES_ID
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