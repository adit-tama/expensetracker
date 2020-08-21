import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Currency from './Currency';
import Login from './Login';

const Header = (props) => {
  return (
  	<Container>
  		<Row className='d-flex align-items-center justify-content-between'>
		    <h1 className='header'>
		    	Track Your Daily Expense Here!
		    </h1>
		    <div className='d-flex align-items-center justify-content-between'>
	    		<Currency />
	    	</div>
	    </Row>
    </Container>
  )
}

export default Header;