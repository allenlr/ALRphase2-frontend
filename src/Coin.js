import React from 'react';

function Coin({coin}){
    return (
        <div>
            <p style={{
                padding: '2px',
                margin: '20px',
                border: '1px solid black',
                width: '45px',
                height: '25px',
                fontSize: '10px',
                lineHeight: '12px',
                textAlign: 'center',
            }}>{coin.name}</p>
            <img src={coin.image} style={{width: '35px', height: '35px'}} alt={coin.id}/>
        </div>
    )
}

export default Coin;