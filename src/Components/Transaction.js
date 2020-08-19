import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);

  	return (
	    <li>
	    	{ transaction.text }
	    	<span>{ transaction.amount } Euro</span>
	    	<button onClick={() => deleteTransaction(transaction.id)}>x</button>
	    </li>
  	)
}

export default Transaction;