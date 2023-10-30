import { useEffect } from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


export default function Events() {
   // Get the current date
   const currentDate = new Date();
   const currentYear = currentDate.getFullYear();
   const currentMonth = currentDate.getMonth();
 
   // Calculate the first day of the current month
   const firstDay = new Date(currentYear, currentMonth, 1);
 
   // Calculate the last day of the current month
   const lastDay = new Date(currentYear, currentMonth + 1, 0);

  function isSameDay(date1, date2) {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }
  const events = [
    { title: 'Sunday Service', start: new Date(), image: '/assets/images/engaged.png' },
    { title: 'Thursday Service', start: new Date('2023-10-26'), image: '/assets/images/study.png' },
    // Add more events with different images as needed
  ];

  const handleEventRender = () => {
    const tdElements = document.querySelectorAll('.fc-day');

    tdElements.forEach((td) => {
      const dateStr = td.getAttribute('data-date');
      const date = new Date(dateStr);

      const matchingEvent = events.find((event) => isSameDay(date, event.start));

      if (matchingEvent) {
        td.style.backgroundImage = `url(${matchingEvent.image})`;
        td.classList.remove('empty-cell');
      } else {
        td.style.backgroundImage = 'none';
        td.classList.add('empty-cell');
      }

      // Hide cells after the last day of the month
      if (date > lastDay) {
        td.style.backgroundColor = '#000';
      }
    });
  };
  // Call handleEventRender when events change
  useEffect(() => {
    handleEventRender();
  }, [events]);

  return (
    <div className="wrapper">
      <div className="container">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          events={events}
          validRange={{
            start: firstDay,
            end: lastDay,
          }}
        />
      </div>
    </div>
  );
}
