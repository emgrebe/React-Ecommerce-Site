import React from 'react';
import './NavBar.css';

class NavBarHeader extends React.Component {
  render() {
    return (
      <div className='NavBar'>
        <div className='NavBar-gifTitle'>
          <img className='gif' src="https://media0.giphy.com/media/67oWKfh5qtTUZITMHp/source.gif" alt="giftbox-gif" />
          <h2 className='welcome'>Krazy Kendra Sale</h2>
        </div>   
        <div className='NavBar-loginSignup'>
          <h3>LOGIN</h3>
        &nbsp;&nbsp; &nbsp;&nbsp;
        <h3>SIGNUP</h3>
      </div>
    </div>
    );
  }
}

export default NavBarHeader;