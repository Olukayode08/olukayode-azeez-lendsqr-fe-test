import React, { useContext } from 'react';
import {FiUsers} from 'react-icons/fi'
import {FaUsers} from 'react-icons/fa'
import {AiOutlineSave} from 'react-icons/ai'
import { HiSaveAs } from 'react-icons/hi';
import { GlobalContext } from '../../context/Context';
import './stats.css';



const Stats = () => {
  const { active } = useContext(GlobalContext);

  return (
    <>
          <main className={active ? 'user-main' : 'user-sidebar-close'}>
            <h2 className='header'>Users</h2>
            <div className='users-stat'>
              <div className='users'>
                <FaUsers className='user icon' />
                <p className='text'>USERS</p>
                <h5>2,453</h5>
              </div>
              <div className='users'>
                <FiUsers className='active-user icon' />
                <p className='text'>ACTIVE USERS</p>
                <h5>2,453</h5>
              </div>
              <div className='users'>
                <AiOutlineSave className='loans icon' />
                <p className='text'>USERS WITH LOANS</p>
                <h5>102,453</h5>
              </div>
              <div className='users'>
                <HiSaveAs className='savings icon' />
                <p className='text'>USERS SAVINGS</p>
                <h5>102,453</h5>
              </div>
            </div>
          </main>
    </>
  );
}
export default Stats
