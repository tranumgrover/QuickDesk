import React, { useState } from 'react';
import './TicketForm.css';

const TicketForm = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ticket created: " + title);
    setTitle("");
  };

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter ticket title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">Create Ticket</button>
    </form>
  );
};

export default TicketForm;
