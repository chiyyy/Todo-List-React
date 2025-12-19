// src/pages/CalendarPage.jsx
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarPage.css';
import RecordBox from '../components/calendarpage/RecordBox';
import { getLocalDateStr } from '../utils/date';

const CalendarPage = () => {
  const [value, setValue] = useState(new Date());
  const [records, setRecords] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('workoutRecords')) || {};
    setRecords(stored);
  }, []);

  const formattedDate = getLocalDateStr(value);
  const workouts = records[formattedDate] || [];

  return (
    <div className="CalendarPage">
      <h2>📅 운동 기록 달력</h2>
      <div className="calendar-wrapper">
        <Calendar
          onChange={setValue}
          value={value}
          tileClassName={({ date }) => {
            const dateStr = getLocalDateStr(date);
            return records[dateStr] ? 'highlight' : null;
          }}
        />
      </div>
      <RecordBox date={formattedDate} workouts={workouts} />
    </div>
  );
};

export default CalendarPage;
