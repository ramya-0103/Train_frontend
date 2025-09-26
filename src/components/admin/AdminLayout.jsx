import React from 'react';
import Sidebar from '../common/Sidebar.jsx';

const AdminLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ padding: '1rem' }}>{children}</main>
    </div>
  );
};

export default AdminLayout;
