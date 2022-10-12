import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/Context';
import './organization.css';
import Pagination from '../Pagination/Pagination';



const Organization = () => {
  const {currentCompanys, active } = useContext(GlobalContext);

  let navigate = useNavigate();

  return (
    <>
        <div className={active ? 'org' : 'org-close'}>
          <div className='data-header'>
            <h3 className='data-heading'>ORGANIZATION</h3>
            <h3 className='data-heading'>USERNAME</h3>
            <h3 className='data-email data-heading'>EMAIL</h3>
            <h3 className='data-heading'>PHONE NUMBER</h3>
            <h3 className='data-heading'>DATE JOINED</h3>
          </div>
          <div className='user-detail'>
            {currentCompanys.map((org) => (
              <main
                className='datas'
                onClick={() => {
                  navigate('/users');
                }}
                key={org.id}
              >
                <p className='data'>{org.orgName}</p>
                <p className='data'>{org.userName}</p>
                <p className='data-email data'>{org.email}</p>
                <p className='data'>{org.phoneNumber}</p>
                <p className='data'>{org.createdAt}</p>
              </main>
            ))}
          </div>
          <Pagination />
        </div>
    </>
  );
};
export default Organization;
