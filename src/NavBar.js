import React from 'react'
// eslint-disable-next-line
import { NavLink } from 'react-router-dom'

function NavBar(){
    return(
        <nav
            style={{
                backgroundColor: '#D1D1D1',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                position: 'fixed',
                top:0,
                left:0,
                right:0,
                height: '15px',
            }}
            // className='active'
        >
            <div style={{ display: 'flex', flexDirection: 'row'}}>
                <NavLink exact to='/' style={{ marginRight: '2rem' }}>Home</NavLink>
                <NavLink to='/form' style={{ marginRight: '2rem' }}>Form</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
        </nav>
    )
}


export default NavBar