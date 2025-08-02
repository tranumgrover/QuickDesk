import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>Dashboard</li>
        <li>Tickets</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
