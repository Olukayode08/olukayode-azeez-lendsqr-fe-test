import axios from 'axios';
import React, {useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/Context';
import Pagination from '../Pagination/Pagination';
import './organizationUsers.css';

const OrganizationUsers = () => {

  const [value, setValue] = useState('');

  const { currentCompanys, company, active, handleReset } = useContext(GlobalContext);
  
  let navigate = useNavigate();

  const handleFilter = (data) => {
    return data.filter((item) => item.email.toLowerCase().includes(value));
  };
  
  const filterData = ()=>{
    handleFilter(currentCompanys)
  }

  return (
    <>
      <div className={active ? 'org-main' : 'org-sidebar-close'}>
        <div className='dashboard-header'>
          <h3 className='dashboard-heading'>ORGANIZATION</h3>
          <h3 className='dashboard-heading'>USERNAME</h3>
          <h3 className='org-email dashboard-heading'>EMAIL</h3>
          <h3 className='dashboard-heading'>PHONE NUMBER</h3>
          <h3 className='dashboard-heading'>DATE JOINED</h3>
          <h3 className='dashboard-heading'>STATUS</h3>
        </div>

        <div className='users-dashboard'>
          <form className='users-form' onSubmit={filterData}>
            <div className='form-action'>
              <label htmlFor='organization'>Organization</label>
              <div className='login-input'>
                <input
                  type='text'
                  className='users-input'
                  id='organization'
                  placeholder='Organization'
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            </div>
            <div className='form-action'>
              <label htmlFor='username'>Username</label>
              <div className='login-input'>
                <input
                  type='text'
                  className='users-input'
                  id='username'
                  placeholder='Username'
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            </div>
            <div className='form-action'>
              <label htmlFor='email'>Email</label>
              <div className='login-input'>
                <input
                  type='email'
                  className='users-input'
                  id='email'
                  placeholder='Email'
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            </div>
            <div className='form-action'>
              <label htmlFor='number'>Phone number</label>
              <div className='login-input'>
                <input
                  type='text'
                  className='users-input'
                  id='number'
                  placeholder='Phone number'
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            </div>
            <div className='form-action'>
              <label htmlFor='created'>Date</label>
              <div className='login-input'>
                <input
                  type='date'
                  className='users-input'
                  id='created'
                  placeholder='Date'
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            </div>
            <div className='form-action'>
              <label htmlFor='status'>Status</label>
              <div className='login-input'>
                <input
                  type='text'
                  className='users-input'
                  id='status'
                  placeholder='Status'
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            </div>
            <div className='btn-container'>
              <button className='btn reset' onClick={() => handleReset()}>
                Reset
              </button>
              <button className='btn'>Filter</button>
            </div>
          </form>
          <div className='users-detail'>
            {currentCompanys.map((org) => (
              <main
                className='users-info'
                onClick={() => {
                  navigate(`/user/${org.id}`);
                }}
                key={org.id}
              >
                <p className='org-email name'>{org.email}</p>
                <p className='name'>{org.phoneNumber}</p>
                <p className='name'>{org.createdAt}</p>
                <p className='name'>{org.lastActiveDate}</p>
              </main>
            ))}
          </div>
        </div>
        <Pagination />
      </div>
    </>
  );
};
export default OrganizationUsers;
