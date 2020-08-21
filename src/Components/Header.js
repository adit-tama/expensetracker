import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import Currency from './Currency';
import Logout from './Logout';
import { GlobalContext } from '../Context/GlobalState';

const Header = (props) => {
	const date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
	const { auth } = useContext(GlobalContext);
	return (
	  	<Container>
	  		<Row className='d-flex align-items-center justify-content-between'>
			    <h1 className='header'>
			    	Track Your Daily Expense Here!
			    </h1>
			    <div className='d-flex flex-column align-items-end justify-content-center'>
			    	<p className='mr-2 text-center'>{auth} | {date}</p>
			    	<div className='d-flex align-items-end justify-content-center'>
			    		<Currency />
			    		<Logout />
			    	</div>
		    	</div>
		    </Row>
	    </Container>
	)
}

export default Header;