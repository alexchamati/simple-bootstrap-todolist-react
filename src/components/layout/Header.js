import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Alert } from 'react-bootstrap';
function Header() {
    return (
        <header style={headerStyle}>
            <Alert variant="light">
                <Alert.Heading><h1>Simple Bootstrap Todo List</h1></Alert.Heading>
                <hr />
                <p className="mb-0">
                    <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
                </p>
            </Alert>
        </header>
        
    );
}

const headerStyle = {
    textAlign: 'center',
    padding: '10px',
}

const linkStyle = {
    textDecoration: 'none'
}

export default Header;
