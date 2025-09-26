import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link to="/">Home</Link> | <Link to="/products">Products</Link>
    </nav>
  );
};

export default Navbar;
