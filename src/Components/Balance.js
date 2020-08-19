import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Container } from 'react-bootstrap';

const Balance = () => {
	const { transactions } = useContext(GlobalContext);

	const amounts = transactions.map(transaction => transaction.amount);
	console.log(amounts)
	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  	return (
	  	<Container>
			<h4>Your Balance</h4>
			<h2 className={"bold"}>{`${total} Euro `}</h2>
	    </Container>
  	)
}

export default Balance;