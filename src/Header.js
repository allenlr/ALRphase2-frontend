import React from 'react';

function Header(){
    return (
        <div 
            className='app-header'
            
            >
                <h1 style={{
                    background: 'linear-gradient(45deg, #68edc6, #009c8a)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
                    margin: '0',
                    padding: '1rem',
                    }}
                >
                    WELCOME
                </h1>
        </div>
    )
}

export default Header;