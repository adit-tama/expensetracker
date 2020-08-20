import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Button } from 'react-bootstrap';

const Transaction = ({ transaction }) => {
	const { deleteTransaction, currency } = useContext(GlobalContext);
	const expense = transaction.amount.toString()

  	return (
  		<tr className='fade-in-right'>
  			<td className={ expense.includes('-') ? 'expense-border' : 'income-border'}>{ transaction.text }</td>
  			<td>{ transaction.amount }</td>
  			<td>{ currency }</td>
  			<Button 
  				variant="outline-danger" 
  				onClick={() => deleteTransaction(transaction.id)}
  				size="sm"
  			>x</Button>
	    </tr>
  	)
}

export default Transaction;