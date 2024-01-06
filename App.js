import React, { useState } from 'react';
import './App.css';
import EventList from './EventList.js';
import EditModal from './EditModal.js';
import AdminPanel from './AdminPanel.js';
import eventData from './eventData.js';
function App() {
  const [events, setEvents] = useState(eventData);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  // Function to edit event details (placeholder)
  const editEvent = (event) => {
    // Implement your edit logic here
    alert(`Edit event: ${event.details}`);
  };

  // Function to open admin panel (placeholder)
  const openAdminPanel = () => {
    // Implement your admin panel logic here
    setShowAdminPanel(true);
  };

  return (
    <div className="App">
      <header>
        <h1>Conference and Workshop Details</h1>
      </header>
      <EventList events={events} editEvent={editEvent} />
      <EditModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        editEvent={editEvent}
      />
      <AdminPanel show={showAdminPanel} onHide={() => setShowAdminPanel(false)} />
      <footer>
        <button id="editBtn" onClick={() => setShowEditModal(true)}>Edit</button>
        <button id="adminBtn" onClick={openAdminPanel}>Admin</button>
      </footer>
    </div>
  );
}

export default App;
