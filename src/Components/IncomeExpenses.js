import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Container, Row, Col } from 'react-bootstrap';
import { useList } from 'react-firebase-hooks/database';

const IncomeExpenses = (props) => {
	const { db,auth,currency } = useContext(GlobalContext);
  const [snapshots, loading, error] = useList(db.ref(`users/${auth}/transactions`));
  const [ rate, setRate ] = useState({})
  
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
        return transaction.val().amount / rate.rates.USD
      } else if (transaction.val().currency === "€") {
        return transaction.val().amount / (rate.rates.EUR ? rate.rates.EUR : 1)
      } else {
        return transaction.val().amount / rate.rates.IDR
      }
      
    });
  	const Income = amounts
  		.filter(item => item > 0)
  		.reduce((acc, item) => (acc += item),0)
  		.toFixed(2)

  	const Expense = (amounts
  		.filter(item => item < 0)
  		.reduce((acc, item) => (acc += item),0)*-1)
  		.toFixed(2)

  	return (
  		<Container className="expense-income bg-warning">
        <Row>
          <Col>
    	  		<div>
    		    	<h4>Income</h4>
    		    	<h5>{currency} {Income}</h5>
    		    </div>
          </Col>
  		    <Col>
            <div>
    		    	<h4>Expense</h4>
    		    	<h5>{currency} {Expense}</h5>
    		    </div>
          </Col>
        </Row>
  		</Container>
  )
}

export default IncomeExpenses;