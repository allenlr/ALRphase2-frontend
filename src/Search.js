import React from 'react'

function Search({search, onSearch}){

    return (
        <div>
            <label style={{
                color: 'white',
                padding:'10px',
            }}>Search for a coin :</label>
            <input 
                id="search" 
                placeholder='Type...' 
                value={search} 
                onChange= {(e) => onSearch(e.target.value)}
            >
            </input>
        </div>
    )
}


export default Search;