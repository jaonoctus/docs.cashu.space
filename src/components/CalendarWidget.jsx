import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ICAL from 'ical.js';
import TitleOnlyEvent from './TitleOnlyEvent';

const localizer = momentLocalizer(moment);

const CalendarWidget = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [startRange, setStartRange] = useState(null); // Start range for events
  const [endRange, setEndRange] = useState(null); // End range for events
  const [loading, setLoading] = useState(true); // Loading state
  const isDarkMode=1;
  // This effect runs once when the component is mounted on the client
  useEffect(() => {
    // Set the date range after component mounts on the client
    setStartRange(moment().startOf('month').toDate());
    setEndRange(moment().add(13, 'years').endOf('month').toDate());
    setLoading(false); // Mark loading as false after initialization
  }, []); // Only run once after the component mounts

  // Fetch events only after startRange and endRange are initialized
  useEffect(() => {
    if (startRange && endRange) {
      const ICS_FEED_URL =
        "https://calendar.proton.me/api/calendar/v1/url/3ZAr2klON3qtvajb3K61Zspl_-vS7Cc93IC5Sz-31w5v7nvycMOFSE1di-ykoyCa8gooMstaFOwWDrZFPMdryQ==/calendar.ics?CacheKey=h6UfMcQ09yjHwydLV8LDPQ%3D%3D&PassphraseKey=uHD16Qip7qEYC4cr9csAaK3ImbG4Q8axRV_wMVX8PB4%3D";
      fetch(ICS_FEED_URL)
        .then((response) => response.text())
        .then((icsData) => {
          const jcalData = ICAL.parse(icsData);
          const comp = new ICAL.Component(jcalData);
          const vevents = comp.getAllSubcomponents('vevent');
          const parsedEvents = [];

          vevents.forEach((vevent) => {
            const event = new ICAL.Event(vevent);
            if (event.isRecurring()) {
              const iterator = event.iterator();
              const duration = event.endDate
                ? event.endDate.toJSDate() - event.startDate.toJSDate()
                : 0;
              let nextOccurrence;
              while (
                (nextOccurrence = iterator.next()) &&
                nextOccurrence.toJSDate() <= endRange
              ) {
                const occurrenceStart = nextOccurrence.toJSDate();
                if (occurrenceStart >= startRange) {
                  parsedEvents.push({
                    title: event.summary || 'No Title',
                    start: occurrenceStart,
                    end: new Date(occurrenceStart.getTime() + duration),
                    description: event.description || 'No description available',
                    location: event.location || 'No location provided',
                  });
                }
              }
            } else {
              parsedEvents.push({
                title: event.summary || 'No Title',
                start: event.startDate.toJSDate(),
                end: event.endDate ? event.endDate.toJSDate() : null,
                description: event.description || 'No description available',
                location: event.location || 'No location provided',
              });
            }
          });
          setEvents(parsedEvents);
        })
        .catch((error) => console.error('Error parsing ICS feed:', error));
    }
  }, [startRange, endRange]); // Run only after the date range is set

  // Show loading until everything is ready
  if (loading) {
    return <div>Loading...</div>; // Show loading until everything is initialized
  }

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const renderLocation = (location) => {
    if (/^https?:\/\//i.test(location)) {
      return (
        <a href={location} target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3' }}>
          {location}
        </a>
      );
    }
    return location;
  };

// Overlay (remains the same for both modes)
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay with some opacity
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '10px',
};

// Popup (consistent for both dark and light modes, adjusting based on the background)
const popupStyle = {
  backgroundColor: '#333', // Dark background for the popup (always dark)
  padding: '12px 16px',
  borderRadius: '6px',
  width: '100%',
  maxWidth: '350px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Subtle shadow to give it a floating effect
  fontFamily: 'Arial, sans-serif',
  color: '#eee', // Light text color for dark mode
  textAlign: 'left',
  lineHeight: '1.4',
};

// Light Mode Popup Style (same as dark mode, but with light background and dark text)
const lightPopupStyle = {
  backgroundColor: '#fff', // Light background for the popup
  padding: '12px 16px',
  borderRadius: '6px',
  width: '100%',
  maxWidth: '350px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Subtle shadow to give it a floating effect
  fontFamily: 'Arial, sans-serif',
  color: '#333', // Dark text color for light mode
  textAlign: 'left',
  lineHeight: '1.4',
};

// Label Style (applied to the labels like Start, End, Location)
const labelStyle = {
  color: '#eee', // Light text
  fontWeight: 'bold', // Make sure the labels are bold
  marginBottom: '4px', // Optional: add a little spacing below labels
};

// Conditionally apply styles based on `isDarkMode`
const appliedPopupStyle = isDarkMode ? popupStyle : lightPopupStyle;


  return (
    <div>
      <div style={{ height: 600, margin: '20px auto' }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable={true}
          onSelectEvent={handleSelectEvent}
          style={{ height: '100%' }}
          components={{
            event: TitleOnlyEvent,
            month: { event: TitleOnlyEvent },
            week: { event: TitleOnlyEvent },
            day: { event: TitleOnlyEvent },
          }}
        />
      </div>

      {selectedEvent && (
        <div style={overlayStyle}>
  <div style={appliedPopupStyle}>
    <h2 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>{selectedEvent.title}</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '14px' }}>
      <p style={labelStyle}>
        <strong>Start:</strong> {selectedEvent.start.toLocaleString()}
      </p>
      {selectedEvent.end && (
        <p style={{ margin: 0 }}>
          <strong>End:</strong> {selectedEvent.end.toLocaleString()}
        </p>
      )}
      <p style={{ margin: 0 }}>
        <strong>Location:</strong> {renderLocation(selectedEvent.location)}
      </p>
      <p>{selectedEvent.description}</p>
    </div>
    <button
      onClick={closeModal}
      style={{
        backgroundColor: '#0070f3',
        color: '#fff',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        marginTop: '12px',
      }}
    >
      Close
    </button>
  </div>
</div>

      )}
    </div>
  );
};

export default CalendarWidget;
