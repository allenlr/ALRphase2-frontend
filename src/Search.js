import React, {useState} from 'react'

function Search({originalCoinList, setCoinList}){
    const [searchState, setSearchState] = useState('')

    return (
        <div>
            <label style={{
                color: 'white',
                padding:'10px'
            }}>Search for a coin :</label>
            <input 
                id="search" 
                placeholder='Type...' 
                value={searchState} 
                onChange= {(e) => {
                    setSearchState(e.target.value)
                    setCoinList(originalCoinList.filter((coin) => searchState !== "" || searchState === 'Type...' ? coin.name.toLowerCase().includes(searchState.toLowerCase()) : true ))
                }}>
            </input>
        </div>
    )
}


export default Search;