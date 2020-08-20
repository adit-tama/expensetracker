import React, { useState, useContext } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { GlobalContext } from '../Context/GlobalState';

const Login = (props) => {
	const [ text, setText ] = React.useState('');
	const [ amount, setAmount ] = React.useState('');
	const [ validText, setValidText ] = React.useState(false);
	const [ validAmount, setValidAmount ] = React.useState(false);
	const { addTransaction } = useContext(GlobalContext);

	const onSubmit = e =>{
		e.preventDefault();
		const newTransaction = {
			id: Math.floor(Math.random() * 10000000),
			text,
			amount,
		}

		if(!text) { setValidText(true) } else { setValidText(false) }
		if(!amount) { setValidAmount(true) } else { setValidAmount(false) }
		if(text && amount) {
			addTransaction(newTransaction) 
			setAmount('')
			setText('')
		}
	}
	const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
    	<Button variant="info" onClick={handleShow}> Login </Button>

    	<Modal 
    		show={show} 
    		onHide={handleClose}
    		aria-labelledby="contained-modal-title-vcenter"
      		centered
    	>
	        <Modal.Header closeButton>
	          <Modal.Title>Login</Modal.Title>
	        </Modal.Header>
	        <Modal.Body>
	        	<Form>
		    		<Form.Group>
		    			<Form.Label className={text ? "fade-in-right " : "visibility-none"}>
		    				Description
		    			</Form.Label>
		    			<Form.Control 
		    				type="text" 
		    				placeholder="enter description here"
		    				value={text}
		    				onChange={(e) => {setText(e.target.value)}}
		    			/>
		    			<Form.Text className={validText ? "fade-in-right text-danger" : "visibility-none"}>
		    				Please fill the description field
		    			</Form.Text>
		    		</Form.Group>
		    		<Form.Group>
		    			<Form.Row>
			    			<Form.Label className={amount ? "fade-in-right" : "visibility-none"}>
					    				Amount
					    	</Form.Label>
				    	</Form.Row>
		    			<Form.Row>
			    			<Form.Control 
			    				type="number" 
			    				placeholder="enter amount"
			    				value={amount}
			    				onChange={(e) => {setAmount(parseInt(e.target.value))}}
			    			/>
		    			</Form.Row>
		    			<Form.Row>
		    				<Form.Text className={validAmount ? "fade-in-right text-danger" : "visibility-none"}>
			    				Please fill the amount field
			    			</Form.Text>
		    			</Form.Row>
		    		</Form.Group>
		    		<br />
		    		<Form.Group className='d-flex justify-content-end'>
		    			<Button onClick={onSubmit}>Add Transaction</Button>
		    		</Form.Group>
		    	</Form>
	        </Modal.Body>
	        <Modal.Footer>
	          <Button variant="secondary" onClick={handleClose}>
	            Close
	          </Button>
	          <Button variant="primary" onClick={handleClose}>
	            Login
	          </Button>
	        </Modal.Footer>
	      </Modal>
    </div>
  )
}

export default Login;