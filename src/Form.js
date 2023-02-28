import React, {useState} from 'react';

function Form({onSubmitForm}){
    const [newCoinName, setNewCoinName] = useState('');
    const [newCoinSymbol, setNewCoinSymbol] = useState('');
    const [newCoinImage, setNewCoinImage] = useState('');
    const [newCoinId, setNewCoinId] = useState('');
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCoinEntry = {
            id: newCoinId,
            name: newCoinName,
            symbol: newCoinSymbol,
            image: newCoinImage,
        }
        onSubmitForm(newCoinEntry)
    }

    return (
        <div style={{
            color: "white",
        }}>
            <h3>Add your own project!</h3>
            <form onSubmit={handleSubmit}>
                <label>New Coin Name</label>
                <p>
                    <input 
                        type="text"
                        value={newCoinName}
                        onChange={(e) => {
                            setNewCoinName(e.target.value)
                            setNewCoinId(e.target.value)
                            }
                        }
                    >
                    </input>
                </p>
                <label>TICKER</label>
                <p>
                    <input 
                        type="text"
                        value={newCoinSymbol}
                        onChange={(e) => setNewCoinSymbol(e.target.value)}
                    >
                    </input>
                </p>
                <label>Image (URL)</label>
                <p>
                    <input 
                        type="text"
                        value={newCoinImage}
                        onChange={(e) => setNewCoinImage(e.target.value)} 
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