import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = props => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/stuff">Stuff</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;