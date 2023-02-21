import React from 'react';

function Header(){
    return (
        <div 
            className='app-header'
            style={{
                    backgroundImage: `url('https://www.mnp.ca/-/media/images/mnp/service/enterprise-risk/insights/f22/bitcoin-with-colorfull-blurred-background-and-reflection-jpg.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
            }}
            >
                <h1 style={{
                    color: 'white'
                }}>WELCOME</h1>
        </div>
    )
}

export default Header;