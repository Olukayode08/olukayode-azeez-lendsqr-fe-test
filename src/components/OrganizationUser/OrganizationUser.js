import React, { useContext, useEffect } from 'react';
import './organizationUser.css';
import { GlobalContext } from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import {FiStar} from 'react-icons/fi'
const OrganizationUser = ({ id }) => {
  const { userDetails, company, fetchUser } = useContext(GlobalContext);
  let navigate = useNavigate();

  useEffect(() => {
    fetchUser(id);
  }, []);

  return (
    <>
      <section className='user-data'>
        <div
          onClick={() => {
            navigate('/users');
          }}
          className='users-back'
        >
          <p>
            <HiOutlineArrowNarrowLeft />
          </p>
          <p className='back-users'>Back to users</p>
        </div>
        <div className='user-details'>
          <h5 className='details-heading'>User Details</h5>
          <div className='user-decision'>
            <h3 className='blacklist-user'>Blacklist User</h3>
            <h3 className='activate-user'>Activate User</h3>
          </div>
        </div>
        <div className='user-profile'>
          <div className='user-brief-profile'>
            <img
              className='avatar'
              src={userDetails?.profile?.avatar}
              alt='lendsqr'
            />
            <div className='username-number'>
              <p className='user-name'>{userDetails.userName}</p>
              <p className='user-number'>{userDetails.phoneNumber}</p>
            </div>
            <div className='star-user'>
              <h4>Users Tier</h4>
              <div className='stars'>
                <FiStar className='star bg'/>
                <FiStar className='star bg'/>
                <FiStar className='star bg' />
              </div>
            </div>
            <div className='user-account-balance'>
              <p>{userDetails.accountNumber}</p>
              <p>{userDetails.accountBalance}</p>
            </div>
          </div>
          <div className='full-details-header'>
            <div className='underline-gen-info'>
              <h5 className='general-info'>General Information</h5>
              <div className='underline'></div>
            </div>
            <h3 className='general-info-header'>Documents</h3>
            <h3 className='general-info-header'>Bank Details</h3>
            <h3 className='general-info-header'>Loans</h3>
            <h3 className='general-info-header'>Savings</h3>
            <h3 className='general-info-header'>App and System</h3>
          </div>
        </div>
        <div className='user-full-profile'>
          <div className='personal-info'>
            <h2 className='personal-info-heading'>Personal information</h2>
            <div className='about'>
              <div className='about-user'>
                <h6>Full name</h6>
                <p className='info-detail'>{userDetails.userName}</p>
              </div>
              <div className='about-user'>
                <h6>Phone Number</h6>
                <p className='info-detail'>{userDetails.phoneNumber}</p>
              </div>
              <div className='about-user'>
                <h6>BVN</h6>
                <p className='info-detail'>{userDetails?.profile?.bvn}</p>
              </div>
              <div className='about-user'>
                <h6>Gender</h6>
                <p className='info-detail'>{userDetails?.profile?.gender}</p>
              </div>
              <div className='about-user'>
                <h6>Address</h6>
                <p className='info-detail'>{userDetails?.profile?.address}</p>
              </div>
              <div className='about-user'>
                <h6>Currency</h6>
                <p className='info-detail'>{userDetails?.profile?.currency}</p>
              </div>
              <div className='about-user'>
                <h6>Email</h6>
                <p className='info-detail'>{userDetails.email}</p>
              </div>
            </div>
          </div>
          <div className='personal-info'>
            <h2 className='personal-info-heading'>Education and Employment</h2>
            <div className='about'>
              <div className='about-user'>
                <h6>LEVEL OF EDUCATION</h6>
                <p className='info-detail'>{userDetails?.education?.level}</p>
              </div>
              <div className='about-user'>
                <h6>EMPLOYMENT STATUS</h6>
                <p className='info-detail'>
                  {userDetails?.education?.employmentStatus}
                </p>
              </div>
              <div className='about-user'>
                <h6>SECTOR</h6>
                <p className='info-detail'>{userDetails?.education?.sector}</p>
              </div>
              <div className='about-user'>
                <h6>DURATION</h6>
                <p className='info-detail'>
                  {userDetails?.education?.duration}
                </p>
              </div>
              <div className='about-user'>
                <h6>OFFICE MAIL</h6>
                <p className='info-detail'>
                  {userDetails?.education?.officeEmail}
                </p>
              </div>
              <div className='about-user'>
                <h6>MONTHLY INCOME</h6>
                <p className='info-detail'>
                  {userDetails?.education?.monthlyIncome}
                </p>
              </div>
              <div className='about-user'>
                <h6>LOAN REPAYMENT</h6>
                <p className='info-detail'>
                  {userDetails?.education?.loanRepayment}
                </p>
              </div>
            </div>
          </div>
          <div className='personal-info'>
            <h2 className='personal-info-heading'>SOCIALS</h2>
            <div className='about'>
              <div className='about-user'>
                <h6>TWITTER</h6>
                <p className='info-detail'>{userDetails?.socials?.twitter}</p>
              </div>
              <div className='about-user'>
                <h6>FACEBOOK</h6>
                <p className='info-detail'>{userDetails?.socials?.facebook}</p>
              </div>
              <div className='about-user'>
                <h6>INSTAGRAM</h6>
                <p className='info-detail'>{userDetails?.socials?.instagram}</p>
              </div>
            </div>
          </div>
          <div className='personal-info'>
            <h2 className='personal-info-heading'>GUARANTORS</h2>
            <div className='about'>
              <div className='about-user'>
                <h6>FIRST NAME</h6>
                <p className='info-detail'>
                  {userDetails?.guarantor?.firstName}
                </p>
              </div>
              <div className='about-user'>
                <h6>LAST NAME</h6>
                <p className='info-detail'>
                  {userDetails?.guarantor?.lastName}
                </p>
              </div>
              <div className='about-user'>
                <h6>PHONE NUMBER</h6>
                <p className='info-detail'>
                  {userDetails?.guarantor?.phoneNumber}
                </p>
              </div>
              <div className='about-user'>
                <h6>GENDER</h6>
                <p className='info-detail'>{userDetails?.guarantor?.gender}</p>
              </div>
              <div className='about-user'>
                <h6>ADDRESS</h6>
                <p className='info-detail'>{userDetails?.guarantor?.address}</p>
              </div>
            </div>
          </div>
          <div className='personal-info'>
            <div className='about'>
              <div className='about-user'>
                <h6>FIRST NAME</h6>
                <p className='info-detail'>
                  {userDetails?.guarantor?.firstName}
                </p>
              </div>
              <div className='about-user'>
                <h6>LAST NAME</h6>
                <p className='info-detail'>
                  {userDetails?.guarantor?.lastName}
                </p>
              </div>
              <div className='about-user'>
                <h6>PHONE NUMBER</h6>
                <p className='info-detail'>
                  {userDetails?.guarantor?.phoneNumber}
                </p>
              </div>
              <div className='about-user'>
                <h6>GENDER</h6>
                <p className='info-detail'>{userDetails?.guarantor?.gender}</p>
              </div>
              <div className='about-user'>
                <h6>ADDRESS</h6>
                <p className='info-detail'>{userDetails?.guarantor?.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrganizationUser;
