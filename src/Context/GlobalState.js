import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
	transactions: [
		{ id: 1, text: 'Flower', amount: -23 },
		{ id: 2, text: 'Flower', amount: 300 }
	]
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
		console.log(data)
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: data,
		})
	}

	return(
		<GlobalContext.Provider value={{
			transactions: state.transactions,
			deleteTransaction,
			addTransaction
		}}>
			{ children }
		</GlobalContext.Provider>
	)
}