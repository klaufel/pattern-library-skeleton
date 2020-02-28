import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Icon from '../../atoms/icon';
import Heading from '../../atoms/heading';
import {
  getCalendarDate,
  getCalendarDays,
  getDateFormat,
  getMonthName,
  getNextMonth,
  getPrevMonth,
  WEEKDAYS_NAMES,
} from './dates';

const Calendar = ({ date, month, year, onDateChange }) => {
  const dateCurrent = getCalendarDate(date);
  const [dateCalendar, setDateCalendar] = useState({
    year: year || dateCurrent.year,
    month: month || dateCurrent.month,
  });
  const calendarDays = getCalendarDays(dateCalendar.year, dateCalendar.month);
  const [dateSelected, setDateSelected] = useState(
    date ? getDateFormat(dateCurrent.year, dateCurrent.month, dateCurrent.day) : null
  );

  const handleNextMonth = () => {
    setDateCalendar(getNextMonth(dateCalendar.year, dateCalendar.month));
  };

  const handlePrevMonth = () => {
    setDateCalendar(getPrevMonth(dateCalendar.year, dateCalendar.month));
  };

  const handleClickDay = date => {
    setDateSelected(date);
    onDateChange && onDateChange(date);
  };

  return (
    <div className='Calendar'>
      <div className='Calendar-header'>
        <span className='Calendar-arrow' onClick={handlePrevMonth}>
          <Icon name='chevronLeft' />
        </span>
        <span className='Calendar-month'>
          <Heading type='span' size='sm'>
            {getMonthName(dateCalendar.month)} {dateCalendar.year}
          </Heading>
        </span>
        <span className='Calendar-arrow' onClick={handleNextMonth}>
          <Icon name='chevronRight' />
        </span>
      </div>
      <div className='Calendar-grid'>
        {WEEKDAYS_NAMES.map(day => {
          const { name, weekend } = day;
          let classname = 'Calendar-week';
          if (weekend) {
            classname += ' Calendar-week--weekend';
          }
          return (
            <div key={name} className={classname}>
              {name}
            </div>
          );
        })}
        {calendarDays.map(dates => {
          const { day, date, month } = dates;
          let classname = `Calendar-day Calendar-day--${month}`;
          if (date === dateSelected) {
            classname += ' is-selected';
          }
          return (
            <div key={date} className={classname} onClick={() => handleClickDay(date)}>
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

Calendar.displayName = 'Calendar';

Calendar.propTypes = {
  /** Default date, format: dd/mm/yyyy  */
  date: PropTypes.string,
  /** Default month to display in calendar  */
  month: PropTypes.number,
  /** Default year to display in calendar  */
  year: PropTypes.number,
  /** Callback to return a selected date. Return a date format: dd/mm/yyyy */
  onDateChange: PropTypes.func,
};

export default Calendar;
