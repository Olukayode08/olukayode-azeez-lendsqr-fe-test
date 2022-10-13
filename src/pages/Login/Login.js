import React from 'react';
import logo from '../../images/logo.svg';
import pablo from '../../images/pablo-sign-in.svg';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();

  return (
    <>
      <section className='login-page'>
        <nav>
          <img className='logo' src={logo} alt='Lendsqr' />
        </nav>
        <main>
          <div className='hero'>
            <div className='left'>
              <img className='pablo' src={pablo} alt='Lendsqr' />
            </div>
            <div className='right'>
              <h3 className='welcome'>Welcome!</h3>
              <p className='enter-details'>Enter details to login.</p>

              <form>
                <div className='input'>
                  <input
                    type='email'
                    className='login-user-input'
                    required
                    placeholder='Email'
                  />
                </div>
                <div className='input'>
                  <input
                    type='password'
                    className='login-user-input'
                    required
                    placeholder='Password'
                  />
                  <p className='input-password-text show'>Show</p>
                </div>
                <div className='forgot-password'>
                  <a href='#'>FORGOT PASSWORD?</a>
                </div>
                <button
                  onClick={() => {
                    navigate('/dashboard');
                  }}
                  className='login-btn'
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
export default Login;
