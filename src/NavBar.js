import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(){
    return(
        <nav
            style={{
                background: 'red',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
                margin: '0',
                padding: '1rem',
            }}
        >
            <div style={{ margin: 0 }}>
                <p>Home</p>
            </div>
        </nav>
    )
}


export default NavBar