import React from 'react';
import Sidebar from './Sidebar';
import TicketList from './TicketList';
import TicketForm from './TicketForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <header className="dashboard-header">
          <h1>🌸 QuickDesk</h1>
          <p>Manage your tasks, issues, and replies effortlessly 💼</p>
        </header>
        <TicketForm />
        <TicketList />
      </div>
    </div>
  );
}

export default App;
