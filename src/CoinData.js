import React from 'react';

function CoinData({coinData}){
    return (
        <div>
            <img 
                src={coinData.image} 
                style={{
                    width: '150px',
                    height: '150px',
                    position: 'absolute',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    right: '0%',
                    top: '0%',
                    }}
                />
        </div>
    )
}


export default CoinData;