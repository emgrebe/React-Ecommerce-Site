import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className='NavBar'>
        <div className='NavBar-gifTitle'>
          <img className='gif' src="https://media0.giphy.com/media/67oWKfh5qtTUZITMHp/source.gif" alt="giftbox-gif" />
          <h1 className='welcome'>Welcome to the Krazy Kendra Sale</h1>
        </div>   
        <div className='NavBar-loginSignup'>
          <h2>LOGIN</h2>
        &nbsp;&nbsp; &nbsp;&nbsp;
        <h2>SIGNUP</h2>
      </div>
    </div>
    );
  }
}

export default NavBar;