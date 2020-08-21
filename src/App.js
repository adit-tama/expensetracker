import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';
import { GlobalProvider } from './Context/GlobalState';

function App() {

  return (
    <GlobalProvider>
      <Main />
    </GlobalProvider>
  );
}

export default App;
