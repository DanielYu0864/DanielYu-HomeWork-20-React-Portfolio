import React from 'react';
import { Link, useLocation} from 'react-router-dom';
function Nav() {
  const location = useLocation();
  return (
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
  )
}

export default Nav
