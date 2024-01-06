import React from 'react';
import EventCard from './EventCard';

function EventList({ events, editEvent }) {
  return (
    <main className="event-container">
      {events.map((event) => (
        <EventCard key={event.id} event={event} editEvent={editEvent} />
      ))}
    </main>
  );
}

export default EventList;
