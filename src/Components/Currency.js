import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Form } from 'react-bootstrap';

const Currency = (props) => {
	const [ currency ] = React.useState('€');
	const { setCurrency } = useContext(GlobalContext);
	return (
		<Form className="mr-2">
			<Form.Control 
				as="select" 
				defaultValue={currency}
				onChange={(e) => setCurrency(e.target.value)}
			>
				<option value={"$"}>$</option>
				<option value={"€"}>€</option>
				<option value={"IDR"}>IDR</option>
		    </Form.Control>
	    </Form>
	)
}

export default Currency;