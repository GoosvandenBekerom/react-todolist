import React from 'react';

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const Header = () => (
    <header style={headerStyle}>
        <h1>React todo list</h1>
    </header>
)

export default Header;