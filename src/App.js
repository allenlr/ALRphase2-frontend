import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Filter from './Filter';
import Form from './Form';
import CoinList from './CoinList';
import Header from './Header';

function App() {

  const [coinList, setCoinList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/coins')
    .then((res) => res.json())
    .then((data) => setCoinList(data))
  }, [])

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Filter />
      <Form />
      <CoinList coinList={coinList}/>
    </div>
  );
}

export default App;
