import React, {useState} from 'react'

function Search({originalCoinList, setCoinList}){
    const [searchState, setSearchState] = useState('')

    function handleSearch(e){
        setSearchState(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        setCoinList(originalCoinList.filter((coin) => searchState ? coin.name.toLowerCase() === searchState.toLowerCase() : true))
        console.log(searchState)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
            <label style={{
                color: 'white',
                padding:'10px'
            }}>Search for a coin :</label>
            <input id="search" placeholder='type' value={searchState} onChange={(e) => handleSearch(e)}>
            </input>
            <button type='submit'>Search</button>
            </form>
        </div>
    )
}


export default Search;