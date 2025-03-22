import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
      {navItems.map((item) => (
        <ul>
          <li>
            <Link to="/">Search Candidates</Link>
          </li>
          <li>
            <Link to="/saved">Saved Candidates</Link>
            <Link key={item.path} to={item.path} style={{ textDecoration: 'none', color: 'blue' }}>
              {item.name}
            </Link>

          </li>
        </ul>

      ))}
    </nav>
  );
};

export default Nav;