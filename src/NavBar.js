import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(){
    return(
        <nav
            style={{
                backgroundColor: '#D1D1D1',
                // WebkitBackgroundClip: 'text',
                // WebkitTextFillColor: 'transparent',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'row',
                // justifyContent: 'space-between',
                alignItems: 'center',
                // width: '100%',
                // margin: '0',
                position: 'fixed',
                top:0,
                left:0,
                right:0,
                height: '15px',
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'row'}}>
                <p style={{ marginRight: '2rem' }}>Home</p>
                <p>Form</p>
            </div>
        </nav>
    )
}


export default NavBar