import React from 'react';
import {NavLink} from 'react-router-dom';

function Navigation() {
  return (
    <div className='navigation'>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <div className='container'>
          <NavLink className='navbar-brand' to='/'>
            VW Collective of Milwaukee
          </NavLink>
          <div>
            <ul className='navbar-nav ml-auto'>
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
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
