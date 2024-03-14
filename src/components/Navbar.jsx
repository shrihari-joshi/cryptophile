import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <div>
          <Link to="/">CryptoPhile</Link>
        </div>
      </div>
      <div className='menu-container'>
        <div className='menu-item'>
          <Link to='/'>Home</Link>
        </div>
        <div className='menu-item'>
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        </div>
        <div className='menu-item'>
          <Link to='/exchange'>Exchanges</Link>
        </div>
        <div className='menu-item'>
          <Link to='/news'>News</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
