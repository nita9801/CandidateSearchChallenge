import { Link } from 'react-router-dom';

const Nav = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
      {navItems.map((item) => (
        <Link key={item.path} to={item.path} style={{ textDecoration: 'none', color: 'blue' }}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;