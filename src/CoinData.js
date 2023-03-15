import React from 'react';

function CoinData({coinData}){
    return (
        <div>
            <p>
                <img 
                    src={coinData.image} 
                    style={{
                        width: '50px',
                        height: '50px',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        }}
                        alt={coinData.name}
                    />
            </p>
            <div style={{color: 'white'}}>
                <p >
                    {coinData.name} ({coinData.ticker.toUpperCase()})
                </p>
                <p>
                    Current Price (USD): ${coinData.price}
                </p>
                <p>
                    Market Cap: {coinData.marketCap}
                </p>
            </div>
        </div>
    )
}


export default CoinData;