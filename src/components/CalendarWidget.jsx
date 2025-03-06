// CalendarWidget.js
import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ICAL from 'ical.js';
import TitleOnlyEvent from './TitleOnlyEvent'; // our custom component

const localizer = momentLocalizer(moment);

const CalendarWidget = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const ICS_FEED_URL =
      "https://calendar.proton.me/api/calendar/v1/url/3ZAr2klON3qtvajb3K61Zspl_-vS7Cc93IC5Sz-31w5v7nvycMOFSE1di-ykoyCa8gooMstaFOwWDrZFPMdryQ==/calendar.ics?CacheKey=h6UfMcQ09yjHwydLV8LDPQ%3D%3D&PassphraseKey=uHD16Qip7qEYC4cr9csAaK3ImbG4Q8axRV_wMVX8PB4%3D";
    // Replace with your actual ICS feed URL

    fetch(ICS_FEED_URL)
      .then(response => response.text())
      .then(icsData => {
        const jcalData = ICAL.parse(icsData);
        const comp = new ICAL.Component(jcalData);
        const vevents = comp.getAllSubcomponents('vevent');
        const parsedEvents = [];

        // Define a date range for recurring events (current month to 13 years out)
        const startRange = moment().startOf('month').toDate();
        const endRange = moment().add(13, 'years').endOf('month').toDate();

        vevents.forEach(vevent => {
          const event = new ICAL.Event(vevent);
          if (event.isRecurring()) {
            const iterator = event.iterator();
            const duration = event.endDate
              ? event.endDate.toJSDate() - event.startDate.toJSDate()
              : 0;
            let nextOccurrence;
            while ((nextOccurrence = iterator.next())) {
              const occurrenceStart = nextOccurrence.toJSDate();
              if (occurrenceStart > endRange) break;
              if (occurrenceStart >= startRange) {
                parsedEvents.push({
                  title: event.summary || "No Title",
                  start: occurrenceStart,
                  end: new Date(occurrenceStart.getTime() + duration),
                  description: event.description || "No description available",
                  location: event.location || "No location provided"
                });
              }
            }
          } else {
            parsedEvents.push({
              title: event.summary || "No Title",
              start: event.startDate.toJSDate(),
              end: event.endDate ? event.endDate.toJSDate() : null,
              description: event.description || "No description available",
              location: event.location || "No location provided"
            });
          }
        });

        setEvents(parsedEvents);
      })
      .catch(error => console.error('Error parsing ICS feed:', error));
  }, []);

  // When an event is clicked, open the popup with details.
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  // Close the modal popup.
  const closeModal = () => {
    setSelectedEvent(null);
  };

  // Helper: If location is a URL, wrap it in a hyperlink.
  const renderLocation = (location) => {
    if (/^https?:\/\//i.test(location)) {
      return (
        <a href={location} target="_blank" rel="noopener noreferrer">
          {location}
        </a>
      );
    }
    return location;
  };

  return (
    <div>
      <div style={{ height: 600, margin: '50px auto' }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable={true}
          onSelectEvent={handleSelectEvent}
          style={{ height: '100%' }}
          // Override event rendering for all views
          components={{
            event: TitleOnlyEvent,
            month: { event: TitleOnlyEvent },
            week: { event: TitleOnlyEvent },
            day: { event: TitleOnlyEvent }
          }}
        />
      </div>

      {selectedEvent && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)', // Opaque overlay
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            width: '90%',
            maxWidth: '400px', // Smaller popup
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            textAlign: 'left'
          }}>
            <h2 style={{ color: '#000', marginBottom: '10px' }}>
              {selectedEvent.title}
            </h2>
            <p><strong>Start:</strong> {selectedEvent.start.toLocaleString()}</p>
            {selectedEvent.end && (
              <p><strong>End:</strong> {selectedEvent.end.toLocaleString()}</p>
            )}
            <p><strong>Location:</strong> {renderLocation(selectedEvent.location)}</p>
            <p>{selectedEvent.description}</p>
            <button onClick={closeModal} style={{
              backgroundColor: '#0070f3',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '10px'
            }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarWidget;


