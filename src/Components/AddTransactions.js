import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Form, Button, Col } from 'react-bootstrap';

const AddTransactions = (props) => {
	const [ text, setText ] = React.useState('');
	const [ amount, setAmount ] = React.useState('');
	const [ currency, setCurrency ] = React.useState('$');
	const [ validText, setValidText ] = React.useState(false);
	const [ validAmount, setValidAmount ] = React.useState(false);
	const { db,auth } = useContext(GlobalContext);

	const onSubmit = e =>{
		e.preventDefault();
		const newTransaction = {
			id: Math.floor(Math.random() * 10000000),
			description: text,
			currency, 
			amount,
		}

		if(!text) { setValidText(true) } else { setValidText(false) }
		if(!amount) { setValidAmount(true) } else { setValidAmount(false) }
		if(text && amount) {
			var newPostRef = db.ref(`users/${auth}/transactions`).push();
			newPostRef.set(newTransaction);
			setAmount('')
			setText('')
		}
	}
	return (
	    <div className='pl-2'>
	    	<h3>Transaction</h3>
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
	    				<Col xl="8" lg="8" md="8" sm="8" xs="8">
		    			<Form.Control 
		    				type="number" 
		    				placeholder="enter amount"
		    				value={amount}
		    				onChange={(e) => {setAmount(parseInt(e.target.value))}}
		    			/>
		    			</Col>
		    			<Col xl="4" lg="4" md="4" sm="4" xs="4">
						<Form.Control 
							as="select" 
							defaultValue={currency}
							onChange={(e) => setCurrency(e.target.value)}
						>
							<option value={"$"}>$</option>
							<option value={"€"}>€</option>
							<option value={"IDR"}>IDR</option>
					    </Form.Control>
					    </Col>
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
	    </div>
	)
}

export default AddTransactions;