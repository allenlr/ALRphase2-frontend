import React, {useState} from 'react'

function Search({originalCoinList, setCoinList}){
    const [searchState, setSearchState] = useState('')

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        setSearchState(searchValue);
        setCoinList(originalCoinList.filter((coin) => searchValue !== "" || searchValue === 'Type...' ? coin.name.toLowerCase().includes(searchValue.toLowerCase()) : true ))
    }

    return (
        <div>
            <label style={{
                color: 'white',
                padding:'10px',
            }}>Search for a coin :</label>
            <input 
                id="search" 
                placeholder='Type...' 
                value={searchState} 
                onChange= {handleSearch}
            >
            </input>
        </div>
    )
}


export default Search;