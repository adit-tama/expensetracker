import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
	transactions: [],
	currency: "€"
}

// Create Context
export const GlobalContext = createContext(initialState);

//Provider Components
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer,initialState);

	function deleteTransaction(id) {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id,
		})
	}

	function addTransaction(data) {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: data,
		})
	}

	function setCurrency(data) {
		dispatch({
			type: 'SET_CURRENCY',
			payload: data,
		})
	}

	return(
		<GlobalContext.Provider value={{
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