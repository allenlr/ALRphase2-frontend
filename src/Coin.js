import React from 'react';


function Coin({coin, setSelectedCoinData}){
    return (
        <div onClick={() => setSelectedCoinData({price: coin.current_price, marketCap: coin.market_cap, name: coin.name, image: coin.image, ticker: coin.symbol})}>
            <p style={{
                margin: '20px',
                width: '60px',
                height: '15px',
                fontSize: '11px',
                lineHeight: '15px',
                textAlign: 'center',
                color: 'white'
            }}>{coin.name}</p>
            <img src={coin.image} style={{width: '35px', height: '35px'}} alt={coin.id}/>
        </div>
    )
}

export default Coin;