import './App.css';
import React, {useEffect, useState} from 'react';
import Search from './Search';
import Form from './Form';
import CoinList from './CoinList';
import Header from './Header';
import CoinData from './CoinData';
import NavBar from './NavBar';

function App() {

  const [coinList, setCoinList] = useState([])
  const [originalCoinList, setOriginalCoinList] = useState([])
  const [coinData, setCoinData] = useState({price: '', marketCap: '', name: '', image: '', ticker: ''})
  // selectedCoin
  // Route for Home, Coins, Form, About page


  useEffect(() => {
    fetch('http://localhost:3000/coins')
    .then((res) => res.json())
    .then((data) => {
      setCoinList(data)
      setOriginalCoinList(data)
    })
  }, [])

  function onSubmitForm(newCoin){
    fetch('http://localhost:3000/coins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCoin)
    })
    .then((res) => res.json())
    .then((addedData) => setCoinList([...originalCoinList, addedData]))
  }

  return (
    <div className="App"
      style={{
        backgroundImage: `url('https://www.mnp.ca/-/media/images/mnp/service/enterprise-risk/insights/f22/bitcoin-with-colorfull-blurred-background-and-reflection-jpg.jpg')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '110vh',
        backgroundColor: 'black',
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <NavBar />
        <div
          style={{
            position:'absolute',
            right:'40%',
            top: '0%',
          }}
          >
          <Header />
        </div>
      <div 
        style={{ 
          position: 'absolute',
          right: '59%', 
        }}>
        <CoinList coinList={coinList} setCoinData={setCoinData}/>
      </div>
      <div 
        style={{ 
          position:'absolute', 
          right:'40%',
          top: '20%', 
        }}>
        <Search originalCoinList={originalCoinList} setCoinList={setCoinList} />
      </div>
      <div 
        style={{ 
          position: 'absolute',
          right:'40%',
        }}>
        
      </div>
      <div 
        style={{ 
          position: 'absolute',
          right:'1%'
        }}>
        <Form onSubmitForm={onSubmitForm} />
      </div>
      <div
        style={{
          position: 'absolute',
          right: '40%',
          top: '30%',
          display: coinData.name === '' ? 'none' : 'flex',
          flexWrap: 'wrap',
          width: '200px',
          height: '200px',
        }}
      >
        <CoinData coinData={coinData} />
      </div>
    </div>
  );
}

export default App;
