import React from 'react';

function SelectedCoinData({ selectedCoinData }){
    return (
        <div 
            style={{
                position: 'absolute',
                right: '45%',
                top: '30%',
                display: selectedCoinData.name === '' ? 'none' : 'flex',
                flexWrap: 'wrap',
                width: '200px',
                height: '200px',
            }}>
            <p>
                <img 
                    src={selectedCoinData.image} 
                    style={{
                        width: '50px',
                        height: '50px',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        right: '60%',
                        position:'absolute',
                        }}
                        alt={selectedCoinData.name}
                    />
            </p>
            <div style={{color: 'white', position:'absolute', right: '40%', top: '50%', display: 'inline-block', flexDirection: "column"}}>
                <p >
                    {selectedCoinData.name}: ({selectedCoinData.ticker.toUpperCase()})
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