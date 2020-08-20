import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';
import AddTransactions from './Components/AddTransactions';
import { GlobalProvider } from './Context/GlobalState';
import { Row, Col, Container } from 'react-bootstrap'

function App() {
  return (
    <GlobalProvider>
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
    </GlobalProvider>
  );
}

export default App;
