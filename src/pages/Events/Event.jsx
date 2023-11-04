import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Upcoming from '../../components/Upcoming'

export default function Events() {
  const [events, setEvents] = useState([]);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);

  function isSameDay(date1, date2) {
    return (
      date1.getDate() === date2.getDate() && // Check if the day matches
      date1.getMonth() === date2.getMonth() && // Check if the month matches
      date1.getFullYear() === date2.getFullYear() // Check if the year matches
    );
  }
  

  function getEvents() {
    let QUERY = encodeURIComponent(`*[_type == "events"]{date, "imageUrl": image.asset->url}`);
    let URL = `https://${import.meta.env.VITE_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${import.meta.env.VITE_SANITY_DATASET}?query=${QUERY}`;

    // fetch the content
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        if (result.length > 0) {
          setEvents(result);
          console.log(events)
        }
        console.log(events)
      })
      .catch((err) => console.error(err));
  }

  const handleEventRender = () => {
    const tdElements = document.querySelectorAll('.fc-day');

    tdElements.forEach((td) => {
      const dateStr = td.getAttribute('data-date');
      const date = new Date(dateStr);

      const matchingEvent = events.find((event) => isSameDay(date, new Date(event.date)));
     
      if (matchingEvent) {
        // const absoluteImageUrl = `https://cdn.sanity.io/images/${import.meta.env.VITE_SANITY_PROJECT_ID}/${import.meta.env.VITE_SANITY_DATASET}/${matchingEvent.image.asset._ref}`;

        td.style.backgroundImage = `url(${matchingEvent.imageUrl})`;
        td.classList.remove('empty-cell');
      }else {
        td.style.backgroundImage = 'none';
        td.classList.add('empty-cell');
      }

      // Hide cells after the last day of the month
      if (date > lastDay) {
        td.style.backgroundColor = '#000';
      }
    });
  }

  useEffect(() => {
    getEvents();
  }, []); // Fetch events when the component mounts

  useEffect(() => {
    handleEventRender();
  }, [events]); // Call handleEventRender when events change

  return (
    <div className="wrapper">
      <Upcoming />
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
