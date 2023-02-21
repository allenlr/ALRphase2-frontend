import React from 'react';
import Coin from './Coin';

function CoinList({coinList}){
    return(
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '600px',
            height: '950px',
            padding: '10px',
            overflow: 'scroll',
            scrollbarColor: 'rgba(255, 255, 255, 0.5) rgba(255, 255, 255, 0.1)',
            backgroundColor: 'linear-gradient(to bottom right, #292929, #404040)',
            overflowX: 'hidden'
        }}>
            {coinList.map((coin) => <Coin key={coin.id} coin={coin}/>)}
        </div>
    )
}

export default CoinList;