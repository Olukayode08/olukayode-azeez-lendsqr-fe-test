import React from 'react';
import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import logo from '../../images/logo.svg'
import user from '../../images/user.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
          <nav>
            <img src={logo} alt='lendsqr' />
            <form className='search-btn'>
              <input type="search" placeholder='Search for anything' />
              <AiOutlineSearch className='search-icon' />
            </form>
            <div className='user-info'>
              <h3 className='docs'>Docs</h3>
              <AiOutlineBell className='bell-icon' />
              <img className='user-img' src={user} alt='lendsqr' />
              <p>Adedeji</p>
            </div>
          </nav>
    </>
  );
};

export default Navbar;
