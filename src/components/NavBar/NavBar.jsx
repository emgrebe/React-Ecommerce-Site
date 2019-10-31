import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='nav-wrapper'>
      <div className='container'>
        <img className='gif' src="https://media0.giphy.com/media/67oWKfh5qtTUZITMHp/source.gif" alt="giftbox-gif" />  
        <Link to='/' className='brand-logo'>Krazy Kendra Sale</Link>

        <ul className="right">
          <li><Link to='/'>Shop</Link></li>
          <li><Link to='/cart'>My Cart</Link></li>
          <li><Link to='/cart'><i className="material-icons">shopping_cart</i></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar