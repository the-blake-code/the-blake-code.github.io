import React from 'react';
import {NavLink} from 'react-router-dom';
import VWCLargeLogo from '../images/large_logo/vwc_full.png';
import VWCSmallLogo from '../images/small_logo/vwc_small.png';

function Navigation() {
  return (
    <div className='navigation'>
      <nav className='navbar navbar-expand'>
        {/* <NavLink className='navbar-brand' to='/'>
          VW Collective of Milwaukee
        </NavLink> */}
        <div className='home-page-image-container'>
          {/** Desktop */}

          <img src={`${VWCLargeLogo}`} />
        </div>
        <div>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>
                Home
                <span className='sr-only'>(current)</span>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/events'>
                Events
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/about'>
                About
              </NavLink>
            </li>
            {/*
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
