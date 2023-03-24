import './App.css';
import React, {useEffect, useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from './Search';
import Form from './Form';
import CoinList from './CoinList';
import Header from './Header';
import SelectedCoinData from './SelectedCoinData';
import NavBar from './NavBar';

function App() {

  const [coinList, setCoinList] = useState([])
  const [searchState, setSearchState] = useState('')
  const [page, setPage] = useState('/')
  const [selectedCoinData, setSelectedCoinData] = useState({
    price: '',
    marketCap: '', 
    name: '', 
    image: '', 
    ticker: ''
  })
  // selectedCoin
  // Route for Home, Coins, Form, About page


  useEffect(() => {
    fetch('http://localhost:3000/coins')
    .then((res) => res.json())
    .then((data) => {
      setCoinList(data)
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
    .then((addedData) => setCoinList([...coinList, addedData]))
  }



  const filteredCoins = coinList.filter((coin) => searchState !== "" || searchState === 'Type...' ? coin.name.toLowerCase().includes(searchState.toLowerCase()) : true);

  function handleSearch(userSearch){
    setSearchState(userSearch)
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
          <CoinList coinList={filteredCoins} setSelectedCoinData={setSelectedCoinData}/>
        </div>
        <div 
          style={{ 
            position:'absolute', 
            right:'40%',
            top: '20%', 
          }}>
          <Search onSearch={handleSearch} search={searchState} />
        </div>
        <div 
          style={{ 
            position: 'absolute',
            right:'1%',
            top: '5%'
          }}>
          <Form onSubmitForm={onSubmitForm} />
        </div>
        <div
          style={{
            position: 'absolute',
            right: '40%',
            top: '30%',
            display: selectedCoinData.name === '' ? 'none' : 'flex',
            flexWrap: 'wrap',
            width: '200px',
            height: '200px',
          }}
        >
          <SelectedCoinData selectedCoinData={selectedCoinData} />
        </div>
      
    </div>
  );
}

export default App;
