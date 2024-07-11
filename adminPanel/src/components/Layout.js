import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;
