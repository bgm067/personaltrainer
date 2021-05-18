
import BigCalendar from 'react-big-calendar-like-google';
import moment from 'moment';
import 'react-big-calendar-like-google/lib/css/react-big-calendar.css';
import { useEffect, useState } from 'react';

function Calendar() {
  BigCalendar.momentLocalizer(moment);
  const [events, setEvents] = useState([]);
  const [viewDate, setViewDate] = useState(moment().toDate());
  const [view, setView] = useState('month');

  const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

  useEffect(() => {
    fetchTrainings();
  }, []);

  const eventConverter = (list) => {
    const newList = list.map((event) => {
      return {
        start: moment(event.date).toDate(),
        end: moment(event.date).add(event.duration, 'm').toDate(),
        title: event.activity + ' / ' + event.customer?.firstname + ' ' + event.customer?.lastname
      }
    });
    return newList;
  }

  const painettuPäivä = (event) => {
    console.log(event);
    setView('day');
    setViewDate(moment(event.start).toDate());
  }

  const päivitä = (type) => {
    setView(type);
  }

  const navigate = (date) => {
    setViewDate(date);
  }

  const valittuPV = (date) => {
    setView('day');
    setViewDate(date);
  }
  const fetchTrainings = () => {
    fetch('https://customerrest.herokuapp.com/gettrainings')
      .then(response => response.json())
      .then(data => {
        setEvents(eventConverter(data));
      })
      .catch(err => console.log(err));
  }

  return (
    <div style={{ width: '65%', height: '700px', margin: 'auto' }}>
      <BigCalendar
        events={events}
        views={allViews}
        step={60}
        date={viewDate}
        view={view}
        onSelectEvent={painettuPäivä}
        onDrillDown={valittuPV}
        onNavigate={navigate}
        onView={päivitä}
      />
    </div>
  );
}

export default Calendar;