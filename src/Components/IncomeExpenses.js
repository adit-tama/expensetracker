import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Container, Row, Col } from 'react-bootstrap';

const IncomeExpenses = (props) => {
	const { transactions, currency } = useContext(GlobalContext);
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