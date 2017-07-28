import React from 'react';
import PropTypes from 'prop-types';

import {
  getDay,
  getDayOfWeek,
  getDayRange,
  isWeekend,
} from '../shared/dates';
import { isCalendarType } from '../shared/propTypes';

const className = 'react-calendar__month-view__days__day';

const Day = ({ calendarType, day, onClick }) => (
  <button
    className={[
      className,
      'react-calendar__tile',
      (isWeekend(day) ? ` ${className}--weekend` : ''),
    ].join(' ')}
    key={day}
    onClick={() => {
      if (onClick) onClick(getDayRange(day));
    }}
    style={(getDay(day) === 1) ? {
      gridColumnStart: getDayOfWeek(day, calendarType) + 1,
    } : null}
  >
    <time dateTime={day.toISOString()}>
      {getDay(day)}
    </time>
  </button>
);

Day.propTypes = {
  calendarType: isCalendarType,
  day: PropTypes.instanceOf(Date).isRequired,
  onClick: PropTypes.func,
};

export default Day;
