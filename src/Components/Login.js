import React, { useState, useContext } from 'react';
import { Button, Container, Form, Card, Alert } from 'react-bootstrap';
import { GlobalContext } from '../Context/GlobalState';

const Login = (props) => {
	const [ username, setusername ] = React.useState('');
	const [ password, setPassword ] = React.useState('');
	const [ validusername, setValidusername ] = React.useState(false);
	const [ validpassword, setValidPassword ] = React.useState(false);
	const [ alert, setAlert ] = React.useState(false);
	const [show, setShow] = useState(false);
	const { addTransaction, db, changeAuth } = useContext(GlobalContext);

	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);
	const onSubmit = e => {
		e.preventDefault();
		if(!username) { setValidusername(true) } else { setValidusername(false) }
		if(username) {
			return db.ref('/users/' + username).once('value').then(function(snapshot) {
				if(!snapshot.val()){ 
					db.ref('users/' + username).set({username:username})
					setAlert(true)
					setTimeout(function(){ setAlert(false); }, 3000);
				} else {
					changeAuth(snapshot.val().username)
				}
			});
		}
	}

  	return (
	    <Container className='full-height d-flex flex-column justify-content-center align-items-center'>
	    	<Alert show={alert} variant={"success"}>You Can Log in with your Username Now</Alert>
	    	<Card>
	    	<Card.Body>
	    	<Card.Title>Expense Tracker</Card.Title>
	    	<Form>
	    			<Form.Label className={username ? "fade-in-right " : "visibility-none"}>
	    				Username
	    			</Form.Label>
	    			<Form.Control 
	    				size="sm"
	    				type="text" 
	    				placeholder="username"
	    				value={username}
	    				onChange={(e) => {setusername(e.target.value)}}
	    			/>
	    			<Form.Text className={validusername ? "fade-in-right text-danger" : "visibility-none"}>
	    				Please fill the Username
	    			</Form.Text>
	    		<br />
	    		<Form.Group className='d-flex justify-content-end'>
	    			<Button size="sm" onClick={onSubmit}>Login/Register</Button>
	    		</Form.Group>
	    	</Form>
	    	</Card.Body>
	    	</Card>
	    </Container>
  	)
}

export default Login;