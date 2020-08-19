import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import Transaction from './Transaction';
import { Container, Table } from 'react-bootstrap';

const TransactionList = (props) => {
	const { transactions } = useContext(GlobalContext)

	return (
		<Container>
			<h3>History</h3>
			<Table hover size="sm">
			  <thead>
			    <tr>
			      <th>Description</th>
			      <th>Amount</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <td>Otto</td>
			      <td>@mdo</td>
			    </tr>
			    <tr>
			      <td>Thornton</td>
			      <td>@fat</td>
			    </tr>
			  </tbody>
			</Table>
			<ul>
				{transactions.map(transaction =>(
					<Transaction 
						key={transaction.id} 
						transaction={transaction} 
					/>
				))}
			</ul>
		</Container>
  )
}

export default TransactionList;