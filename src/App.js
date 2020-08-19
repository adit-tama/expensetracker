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
          <Col className='right-border'>
            <Balance />
            <IncomeExpenses />
          </Col>
          <Col>
            <AddTransactions />
          </Col>
        </Row>
        <Row>
          <TransactionList />
        </Row>
      </Container>
    </GlobalProvider>
  );
}

export default App;
