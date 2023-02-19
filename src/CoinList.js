import React from 'react';
import Coin from './Coin';

function CoinList({coinList}){
    return(
        <div>
            {coinList.map((coin) => <Coin key={coin.id} coin={coin}/>)}
        </div>
    )
}

export default CoinList;