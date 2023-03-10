import React from 'react';

function CoinData({coinData}){
    return (
        <div style={{position: 'absolute', top: '-100%'}}>
            <p>
                <img 
                    src={coinData.image} 
                    style={{
                        width: '50px',
                        height: '50px',
                        position: 'relative',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        top: '100%',
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