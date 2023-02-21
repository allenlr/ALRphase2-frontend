import React from 'react';

function CoinData({coinData}){
    return (
        <div>
            <img 
                src={coinData.image} 
                style={{width: '35px', height: '35px'}}
                />
        </div>
    )
}


export default CoinData;