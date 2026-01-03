import {NavLink} from 'react-router-dom';

function Navigation() {
  return (
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
  );
}

export default Navigation;
