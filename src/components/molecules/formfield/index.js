import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../atoms/label';
import Input from '../../atoms/input';
import './index.scss';

const FormField = ({ label, name, value, defaultValue, onClick, disabled, readonly, ...props }) => {
  return (
    <div className='FormField'>
      {label && (
        <Label name={name} text={label}>
          {label}
        </Label>
      )}
      <Input
        type='text'
        id={name}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        readonly={readonly}
        onClick={onClick}
        {...props}
      />
    </div>
  );
};

FormField.displayName = 'FormField';

FormField.propTypes = {
  /** The label itself */
  label: PropTypes.string.isRequired,
  /** Sets the name property of an element in the DOM */
  name: PropTypes.string.isRequired,
  /** A hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds */
  placeholder: PropTypes.string,
  /** Value of input */
  value: PropTypes.string,
  /** Default value of input */
  defaultValue: PropTypes.string,
  /** This Boolean attribute prevents the user from interacting with the input */
  disabled: PropTypes.bool,
  /** This Boolean attribute prevents the user modify the value of input */
  readonly: PropTypes.bool,
  /** Click event */
  onClick: PropTypes.func,
};

export default FormField;
