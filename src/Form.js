import React from 'react';

function Form(){
    return (
        <div style={{
            color: "white",
        }}>
            <h3>Add your own project!</h3>
            <label>New Coin Name</label>
            <p>
                <input type="text"></input>
            </p>
            <label>TICKER</label>
            <p>
                <input type="text"></input>
            </p>
            <p>
                <button type="submit">Add Coin</button>
            </p>
        </div>
    )
}

export default Form;