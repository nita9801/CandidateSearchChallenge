import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Candidate Search</h1>
      <nav>
        <ul>
          <li><Link to="/">Search</Link></li>
          <li><Link to="/saved">Saved Candidates</Link></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;