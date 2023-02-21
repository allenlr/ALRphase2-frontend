import './App.css';
import React, {useEffect, useState} from 'react';
import Search from './Search';
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
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      
        
      <div 
        style={{ 
          position: 'absolute',
          right: '59%', 
        }}>
        <CoinList coinList={coinList}/>
      </div>
      <div 
        style={{ 
          position:'absolute', 
          right:'42%',
          top: '8%', 
        }}>
        <Search />
      </div>
      <div 
        style={{ 
          position: 'absolute',
          right:'40%',
        }}>
        <Header />
      </div>
      <div 
        style={{ 
          position: 'absolute',
          right:'1%'
           
        }}>
        <Form />
      </div>
      
    </div>
  );
}

export default App;
