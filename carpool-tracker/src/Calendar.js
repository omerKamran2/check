import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';

function Calendar() {
  const handleDayClick = async (dayInfo) => {
    try {
      const { dateStr } = dayInfo;
      console.log("check2")
      // Make a POST request to the backend to update the carpool status for the clicked day
      await axios.post('/events', { date: dateStr, carpoolStatus: 'going' });

      // Refresh the calendar or update the events data to reflect the changes
      // You can maintain a separate state for the events data and update it here
    } catch (error) {
      console.error('Failed to update carpool status:', error);
    }
  };

  const renderEventContent = (eventInfo) => {
    const { event } = eventInfo;
    const { carpoolStatus } = event.extendedProps;

    let backgroundColor = '';
    switch (carpoolStatus) {
      case 'going':
        backgroundColor = 'green';
        break;
      case 'notGoing':
        backgroundColor = 'red';
        break;
      default:
        backgroundColor = 'gray';
        break;
    }

    return (
      <div style={{ backgroundColor }}>
        {event.title}
      </div>
    );
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      eventClick={handleDayClick}
      eventContent={renderEventContent}
    />
  );
}

export default Calendar;
