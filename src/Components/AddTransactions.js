import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Container, Form, Button } from 'react-bootstrap';

const AddTransactions = (props) => {
	const [text, setText] = React.useState('');
	const [amount, setAmount] = React.useState();
	const { validText, setValidText } = React.useState('');
	const { validAmount, setValidAmount } = React.useState('');
	const { addTransaction } = useContext(GlobalContext);

	const onSubmit = e =>{
		e.preventDefault();
		const newTransaction = {
			id: Math.floor(Math.random() * 10000000),
			text,
			amount
		}

		!text && setValidText(false)
		!amount && setValidAmount(false)

		
	}
	return (
	    <Container>
	    	<h3>Transaction</h3>
	    	<Form onSubmit={onSubmit}>
	    		<Form.Group>
	    			<Form.Label className={text ? "fade-in-right" : "visibility-none"}>
	    				Description
	    			</Form.Label>
	    			<Form.Control 
	    				type="text" 
	    				placeholder="enter description here"
	    				value={text}
	    				onChange={(e) => {setText(e.target.value)}}
	    			/>
	    		</Form.Group>
	    		<Form.Group>
	    			<Form.Label className={amount ? "fade-in-right" : "visibility-none"}>
	    				Amount
	    			</Form.Label>
	    			<Form.Control 
	    				type="number" 
	    				placeholder="enter amount"
	    				value={amount}
	    				onChange={(e) => {setAmount(parseInt(e.target.value))}}
	    			/>
	    		</Form.Group>
	    		<Form.Group>
	    			<br />
	    			<Button>Add Transaction</Button>
	    		</Form.Group>
	    	</Form>
	    </Container>
	)
}

export default AddTransactions;