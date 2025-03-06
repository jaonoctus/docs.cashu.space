// TitleOnlyEvent.js
import React from 'react';

const TitleOnlyEvent = ({ event }) => {
  return (
    <div class="bg p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <dt style={{ color: '#0070f3', marginBottom: '10px' }}>
        {event.title}
      </dt>
    </div>
  );
};

export default TitleOnlyEvent;
