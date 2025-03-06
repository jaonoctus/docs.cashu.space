// TitleOnlyEvent.js
import React from 'react';

const TitleOnlyEvent = ({ event }) => {
  return (
    <span title={event.title} style={{ whiteSpace: 'normal' }}>
      {event.title}
    </span>
  );
};

export default TitleOnlyEvent;
