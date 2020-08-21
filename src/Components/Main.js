import React, { useContext } from 'react';
import Header from './Header';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './TransactionList';
import AddTransactions from './AddTransactions';
import { Row, Col, Container } from 'react-bootstrap';
import { GlobalContext } from '../Context/GlobalState';
import Login from './Login';

const Application = () => {
  return (
    <Container>
        <Row>
          <Container>
            <Header />
          </Container>
        </Row>
        <Row>
          <Col className='rounded bg-warning pt-5 pl-5'>
              <Balance />
              <IncomeExpenses className='bg-danger'/>
          </Col>
          <Col>
            <AddTransactions />
          </Col>
        </Row>
        <Row className='mt-5'>
          <TransactionList />
        </Row>
     </Container>
  )
}

function Main() {
  const { auth } = useContext(GlobalContext);

  return (
    <>
        {auth && <Application />}
        {!auth && <Login />}
    </>
  );
}

export default Main;
