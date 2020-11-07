import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import './style.css';
function Nav() {
  const location = useLocation();
  return (
    <nav>
      <ul>
        <li>
          <Link to='/' className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>
            About
          </Link>
        </li>
        <li>
          <Link to='/portfolio' className={location.pathname === '/portfolio' ? 'nav-link active' : 'nav-link'}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to='/contact' className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
