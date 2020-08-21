import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { GlobalContext } from '../Context/GlobalState';

const Logout = (props) => {
	const { changeAuth } = useContext(GlobalContext);
  	return (
    	<div><Button onClick={() => changeAuth(false)}variant="danger">Logout</Button></div>
  	)
}

export default Logout;