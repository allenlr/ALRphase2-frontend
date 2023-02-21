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
    <div className="App"
      style={{
        backgroundImage: `url('https://www.mnp.ca/-/media/images/mnp/service/enterprise-risk/insights/f22/bitcoin-with-colorfull-blurred-background-and-reflection-jpg.jpg')`,
        backgroundSize: 'contian',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      
        
      <div style={{ width: '0%' }}>
        <CoinList coinList={coinList}/>
      </div>
      <div style={{ width: '30%' }}>
        <Filter />
      </div>
      <div style={{ width: '50%'}}>
        <Header />
      </div>
      <div style={{ width: '10%' }}>
        <Form />
      </div>
      
    </div>
  );
}

export default App;
