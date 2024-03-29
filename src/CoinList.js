import React from 'react';
import Coin from './Coin';

function CoinList({coinList, setSelectedCoinData}){
    return(
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: '90px',
            width: '650px',
            height: '950px',
            padding: '10px',
            overflow: 'scroll',
            scrollbarColor: 'rgba(255, 255, 255, 0.5) rgba(255, 255, 255, 0.1)',
            backgroundColor: 'linear-gradient(to bottom right, #292929, #404040)',
            overflowX: 'hidden',
            position: 'absolute',
            right: '59%', 
        }}>
            {coinList.map((coin) => <Coin key={coin.id} coin={coin} setSelectedCoinData={setSelectedCoinData} />)}
        </div>
    )
}

export default CoinList;