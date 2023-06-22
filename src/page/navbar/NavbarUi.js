import React from 'react'
import { Link } from 'react-router-dom';
import { SIDE_BAR_DATA } from './data';
import './Navbar.scss';

const NavbarUi = ({  gotoPage }) => {
    return (
        <div className='menu-conatiner'>
      <div>
        <div className='top-container'>
          <div className='heading-container'>
            <span className='heading'>Board.</span>
          </div>
        
        </div>
        <div className='bottom-container'>
          {SIDE_BAR_DATA.ADVANCED.map((item, index) => {
            return (
              <div onClick={()=>gotoPage(item.path)} key={index} className="menu-item">
                {/* <Link to={item.path}> */}
                  {item.icon}
                  <span>{item.title}</span>
                {/* </Link> */}
              </div>
            );
          })}
        </div>
      </div>

      <div className='account-container'>
        <div className='account-details'>
          <div className='left'> 
            <span className='jotey'>Help</span>
            <span className='store-code'>Contact us.</span>
          </div>
          <div>
            <i className='icon-Chevron-Right' />
          </div>
        </div>
      </div>

    </div>
    );
};

export default NavbarUi;