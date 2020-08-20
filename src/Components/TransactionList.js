import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import Transaction from './Transaction';
import { Popover, Container, Table, OverlayTrigger, Image, Row } from 'react-bootstrap';
import tooltipsicon from './Assets/tooltips.svg';
import Save from './Save'

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Info</Popover.Title>
    <Popover.Content>
    	<span className='text-danger'>Red</span> is Cash In <br />
  		<span className='text-success'>Green</span> is Cash Out
    </Popover.Content>
  </Popover>
);

const TransactionList = (props) => {
	const { transactions } = useContext(GlobalContext)

	return (
		<Container>
			<Container>
			<Row className='d-flex justify-content-between'>
				<div className='d-flex'>
					<h3>History</h3>
					<OverlayTrigger trigger={["hover", "hover"]} placement="right" overlay={popover}>
						<sup>
							<Image className="ml-1" src={tooltipsicon} rounded />
						</sup>
					</OverlayTrigger>
				</div>
				<Save />
			</Row>
			</Container>
			<Table hover size="sm">
			  <thead>
			    <tr>
			      <th>Description</th>
			      <th>Amount</th>
			      <th>Currency</th>
			    </tr>
			  </thead>
			  <tbody>
			    {transactions.map(transaction =>(
					<Transaction 
						key={transaction.id} 
						transaction={transaction} 
					/>
				))}
			  </tbody>
			</Table>
			<ul>
				
			</ul>
		</Container>
  )
}

export default TransactionList;