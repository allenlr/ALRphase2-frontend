import React, {useState} from 'react';

function Form({onSubmitForm}){
    // const [newCoinName, setNewCoinName] = useState('');
    // const [newCoinSymbol, setNewCoinSymbol] = useState('');
    // const [newCoinImage, setNewCoinImage] = useState('');
    // const [newCoinId, setNewCoinId] = useState('');
    const [newCoinData, setNewCoinData] = useState({
        id: '',
        name: '',
        symbol: '',
        image: '',
    })
    
    function handleFormChanges(e) {
        const keyName = e.target.name
        setNewCoinData({
            ...newCoinData,
            [keyName]: e.target.value,
            id: newCoinData.name

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitForm(newCoinData)
    }

    return (
        <div style={{
            color: "white",
            position: 'absolute',
            top: '20%'
        }}>
            <h3>Add your own project!</h3>
            <form onSubmit={handleSubmit}>
                <label>New Coin Name</label>
                <p>
                    <input 
                        type="text"
                        value={newCoinData.name}
                        name='name'
                        onChange={handleFormChanges}
                    >
                    </input>
                </p>
                <label>TICKER</label>
                <p>
                    <input 
                        type="text"
                        value={newCoinData.ticker}
                        name='symbol'
                        onChange={handleFormChanges}
                    >
                    </input>
                </p>
                <label>Image (URL)</label>
                <p>
                    <input 
                        type="text"
                        value={newCoinData.image}
                        name='image'
                        onChange={handleFormChanges} 
                    >
                    </input>
                </p>
                <p>
                    <button type="submit">Add Coin Project</button>
                </p>
            </form>
        </div>
    )
}

export default Form;