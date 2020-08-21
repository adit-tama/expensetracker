import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import Transaction from './Transaction';
import { Popover, Container, Table, OverlayTrigger, Image, Row } from 'react-bootstrap';
import tooltipsicon from './Assets/tooltips.svg';
import Save from './Save';
import { useList } from 'react-firebase-hooks/database';

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
	const { db, auth } = useContext(GlobalContext);
	const [transactions, setTransactions] = useState([]);
	const [snapshots, loading, error] = useList(db.ref(`users/${auth}/transactions`));

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
			</Row>
			</Container>
			{error && <strong>Error: {error}</strong>}
        	{loading && <span>List: Loading...</span>}
        	{!loading && snapshots && (
        		<>
				<Table hover size="sm">
				  <thead>
				    <tr>
				      <th className="text-center">Description</th>
				      <th className="text-center">Amount</th>
				      <th className="text-center">Currency</th>
				      <th className="text-center">Action</th>
				    </tr>
				  </thead>
				  <tbody>
				    { snapshots.map((snapshot, index) =>{
						return (<Transaction 
							key={snapshot.key} 
							transaction={snapshot.val()} 
						/>)
					}) }
				  </tbody>
				</Table>
				</> )
        	}
			<ul>
				
			</ul>
		</Container>
  )
}

export default TransactionList;