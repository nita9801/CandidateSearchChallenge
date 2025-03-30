import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  const navItems: { path: string; name: string }[] = [];

  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.path}> {/* Use a unique key, such as `item.path` */}
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;