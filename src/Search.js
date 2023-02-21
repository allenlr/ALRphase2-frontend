import React from 'react'

function Search(){
    return (
        <div>
            <label style={{
                color: 'white',
                padding:'10px'
            }}>Search for a coin :</label>
            <input id="search" placeholder='type'>
            </input>
        </div>
    )
}


export default Search;