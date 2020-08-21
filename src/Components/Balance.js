import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Container } from 'react-bootstrap';
import { useList } from 'react-firebase-hooks/database';

const Balance = () => {
	const { db,auth,currency } = useContext(GlobalContext);
	const [ rate, setRate ] = useState({})
	const [snapshots, loading, error] = useList(db.ref(`users/${auth}/transactions`));
	

	useEffect(() => {
		const getRate = async () => {
			let val;
			if(currency === "$") {
				val = "USD"
			} else if (currency === "€") {
				val = "EUR"
			} else {
				val = "IDR"
			}
			return await fetch('https://api.exchangeratesapi.io/latest?base='+val).then(res => res.json())
		}
		getRate().then((a) => {setRate(a)})
	},[currency])

	const amounts = snapshots.map(transaction =>  { 
      if (transaction.val().currency === "$") {
        return transaction.val().amount / (rate.rates.USD ? rate.rates.USD : 1)
      } else if (transaction.val().currency === "€") {
        return transaction.val().amount / (rate.rates.EUR ? rate.rates.EUR : 1)
      } else {
        return transaction.val().amount / (rate.rates.IDR ? rate.rates.IDR : 1)
      }
      
    });
	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(0);

  	return (
	  	<Container className='bg-warning'>
			<h4>Your Balance</h4>
			{ loading && <h4>Loading...</h4>}
			{ !error && <h2 className={"bold"}>{`${currency} ${total}`}</h2> }
	    </Container>
  	)
}

export default Balance;