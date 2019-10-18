import React from 'react';
import './NavBar.css';

class NavBarFooter extends React.Component {
  render() {
    return (
      <div className='categories'>
        <p>Necklaces</p>
        <p>Earrings</p>
        <p>Bracelets</p>
        <p>Rings</p>
        <p>View All</p>
      </div>
    )
  }
}

export default NavBarFooter;