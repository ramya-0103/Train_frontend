import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '15px', marginTop: '20px', background: '#333', color: '#fff' }}>
      <p>© {new Date().getFullYear()} E-Commerce App. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
