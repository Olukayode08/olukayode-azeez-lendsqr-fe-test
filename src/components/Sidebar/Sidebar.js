import React, { useContext, useEffect } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { Link, } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { GlobalContext } from '../../context/Context';
import { Links } from '../../data/data';
import './sidebar.css'

const Sidebar = () => {
  const {active,setActive, screenSize, setScreenSize} = useContext(GlobalContext)

    useEffect(() => {
      const handleSize = () => setScreenSize(window.innerWidth);
      window.addEventListener('resize', handleSize);
      handleSize();
      return () => window.removeEventListener('resize', handleSize);
    }, []);

    useEffect(() => {
      if (screenSize <= 1200) {
        setActive(false);
      } else {
        setActive(true);
      }
    }, [screenSize]);

  return (
    <>
      <section>
        <div className={active ? 'close-sidebar' : 'open-sidebar'}>
          <Hamburger
            toggled={active}
            toggle={setActive}
            easing='ease-in'
            size={20}
            direction='left'
          />
        </div>
        <aside className={active ? 'aside' : 'close-aside'}>
          <div className='sidebar'>
            <Link className='switch-company' to='/'>
              <BiUser className='icon' />
              <h2 className='aside-header'>Switch Organization</h2>
            </Link>
            <Link className='dashboard' to='/'>
              <BiUser className='icon' />
              <h2 className='aside-header'>Dashboard</h2>
            </Link>
            {Links.map((item) => (
              <div key={item.id}>
                <h2 className='title'>{item.title}</h2>
                {item.links.map((link) => (
                  <Link key={link.index} className='customer-info'>
                    <p className='icon'>{link.icon}</p>
                    <h4 className='text'>{link.name}</h4>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}
export default Sidebar;
