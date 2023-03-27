import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
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
  console.log(page)
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
      <NavBar onChangePage={setPage} />
          <Header />
          <Switch>
            <Route exact path='/'>
              <CoinList coinList={filteredCoins} setSelectedCoinData={setSelectedCoinData}/>
              <Search onSearch={handleSearch} search={searchState} />
            </Route>
            <Route exact path='/form'>
              <Form onSubmitForm={onSubmitForm} />
            </Route>
          </Switch>
          <SelectedCoinData selectedCoinData={selectedCoinData} />
    </div>
  );
}

export default App;
