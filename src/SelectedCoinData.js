import React from 'react';

function SelectedCoinData({ selectedCoinData }){
    return (
        <div>
            <p>
                <img 
                    src={selectedCoinData.image} 
                    style={{
                        width: '50px',
                        height: '50px',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        }}
                        alt={selectedCoinData.name}
                    />
            </p>
            <div style={{color: 'white'}}>
                <p >
                    {selectedCoinData.name} ({selectedCoinData.ticker.toUpperCase()})
                </p>
                <p>
                    Current Price (USD): ${selectedCoinData.price}
                </p>
                <p>
                    Market Cap: {selectedCoinData.marketCap}
                </p>
            </div>
        </div>
    )
}


export default SelectedCoinData;