import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Container } from 'react-bootstrap';

const Balance = () => {
	const { currency, transactions } = useContext(GlobalContext);

	const amounts = transactions.map(transaction => transaction.amount);
	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  	return (
	  	<Container className='bg-warning'>
			<h4>Your Balance</h4>
			<h2 className={"bold"}>{`${currency} ${total}`}</h2>
	    </Container>
  	)
}

export default Balance;