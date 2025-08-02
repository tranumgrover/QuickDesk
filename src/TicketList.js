import React from 'react';
import './TicketList.css';

const TicketList = () => {
  const tickets = [
    { id: 1, title: "Issue with login", status: "Open" },
    { id: 2, title: "Page not loading", status: "In Progress" },
  ];

  return (
    <div className="ticket-list">
      <h3>Tickets</h3>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            <strong>{ticket.title}</strong> - {ticket.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
