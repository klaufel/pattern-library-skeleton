import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Popover from '../../atoms/popover';
import FormField from '../formfield';
import Calendar from '../calendar';

const Datepicker = ({ label, name, placeholder, disabled, date, month, year }) => {
  const [isActive, setIsActive] = useState(false);
  const [calendarDate, setCalendarDate] = useState(date);

  const handleClick = () => setIsActive(!isActive);
  const handleClose = () => setIsActive(false);

  useEffect(() => handleClose, [calendarDate]);

  return (
    <div className='Datepicker'>
      <FormField
        label={label}
        placeholder={placeholder}
        name={name}
        value={calendarDate || ''}
        readonly
        disabled={disabled}
        onClick={handleClick}
      />
      <Popover isOpen={isActive} onClose={handleClose} closeOutside>
        <Calendar onDateChange={setCalendarDate} date={calendarDate} month={month} year={year} />
      </Popover>
    </div>
  );
};

Datepicker.displayName = 'Datepicker';

Datepicker.propTypes = {
  /** The label itself */
  label: PropTypes.string.isRequired,
  /** A hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds */
  placeholder: PropTypes.string,
  /** Sets the name property of an element in the DOM */
  name: PropTypes.string.isRequired,
  /** This Boolean attribute prevents the user from interacting with the input */
  disabled: PropTypes.bool,
  /** Default date, format: dd/mm/yyyy  */
  date: PropTypes.string,
  /** Default month to display in calendar  */
  month: PropTypes.number,
  /** Default year to display in calendar  */
  year: PropTypes.number,
};

export default Datepicker;
