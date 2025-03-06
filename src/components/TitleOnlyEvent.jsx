// TitleOnlyEvent.js
import React from 'react';

const TitleOnlyEvent = ({ event }) => {
  return (
    <div className="bg p-6 rounded-lg shadow-sm hover:bg-opacity-90 transition-colors">
      <dt style={{ color: '#0070f3', marginBottom: '10px' }}>
        {event.title}
      </dt>
    </div>
  );
};

export default TitleOnlyEvent;
