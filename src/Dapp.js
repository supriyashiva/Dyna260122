import React, { Component } from 'react';
import Signin from './pages/singin/Signin';

class Dapp extends Component {
    render() {
        const myStyle = {
            backgroundImage:
                "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
            height: '100vh',
            marginTop: '-70px',
            fontSize: '30px',
            // backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };
        return (
            <div style={myStyle}>
                <Signin />
                <Signin />
            </div>
        );
    }
}

export default Dapp;