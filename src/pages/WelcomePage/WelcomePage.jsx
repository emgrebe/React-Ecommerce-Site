import React from 'react';
import './WelcomePage.css';

class WelcomePage extends React.Component {
  render() {
    return (
      <div className='WelcomePage'>
        <img className='bling' src='https://hannahmcook.files.wordpress.com/2018/07/7roc.gif?w=224&h=218'></img>
        <h3>DISCLAIMER: NOT ACTUALLY AFFILIATED 
        WITH KENDRA SCOTT! JUST SELLING MY
        OLD JEWELRY!</h3>
        <h4>Great prices on quality jewelry that has been
          very lightly/never worn. Alot of these pieces are
          no longer sold in-store or they are custom pieces.
          Prices are 50%-70% off in-store prices!If you have
          any questions, feel free to contact me!</h4>
      </div>
    )
  }
}

export default WelcomePage;