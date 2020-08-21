import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Button } from 'react-bootstrap';

const Transaction = ({ transaction }) => {
	const { deleteTransaction, currency } = useContext(GlobalContext);
	const expense = transaction.amount.toString()

  	return (
  		<tr className='fade-in-right'>
  			<td className={ expense.includes('-') ? 'expense-border' : 'income-border text-center'}>{ transaction.description }</td>
  			<td className="text-center">{ transaction.amount }</td>
  			<td className="text-center">{ transaction.currency }</td>
  			<td className="text-center"><Button 
  				variant="outline-danger" 
  				onClick={() => deleteTransaction(transaction.id)}
  				size="sm"
  			>x</Button></td>
	    </tr>
  	)
}

export default Transaction;