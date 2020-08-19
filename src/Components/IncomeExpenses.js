import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Container, Row, Col } from 'react-bootstrap';

const IncomeExpenses = (props) => {
	const { transactions } = useContext(GlobalContext);
  	const amounts = transactions.map(transaction => transaction.amount);
  	const Income = amounts
  		.filter(item => item > 0)
  		.reduce((acc, item) => (acc += item),0)
  		.toFixed(2)

  	const Expense = (amounts
  		.filter(item => item < 0)
  		.reduce((acc, item) => (acc += item),0)*-1)
  		.toFixed(2)

  	return (
  		<Container className="expense-income">
        <Row>
          <Col>
    	  		<div>
    		    	<h4>Income</h4>
    		    	<p>{Income} Euro</p>
    		    </div>
          </Col>
  		    <Col>
            <div>
    		    	<h4>Expense</h4>
    		    	<p>{Expense} Euro</p>
    		    </div>
          </Col>
        </Row>
  		</Container>
  )
}

export default IncomeExpenses;