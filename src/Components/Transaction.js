import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Button } from 'react-bootstrap';

const Transaction = ({ transaction }) => {
	const { db, auth } = useContext(GlobalContext);
	const expense = transaction.amount.toString()
  const deleteTransaction = () => {
    var query = db.ref(`users/${auth}/transactions`).orderByKey();
    query.once("value")
      .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var pkey = childSnapshot.key; 

        //check if remove this child
        if(childSnapshot.val().id == transaction.id){
          db.ref(`users/${auth}/transactions/${pkey}`).remove();
        }

      });
    });
  }

  	return (
  		<tr className='fade-in-right'>
  			<td className={ expense.includes('-') ? 'expense-border text-center' : 'income-border text-center'}>{ transaction.description }</td>
  			<td className="text-center">{ transaction.amount }</td>
  			<td className="text-center">{ transaction.currency }</td>
  			<td className="text-center"><Button 
  				variant="outline-danger" 
  				onClick={deleteTransaction}
  				size="sm"
  			>x</Button></td>
	    </tr>
  	)
}

export default Transaction;