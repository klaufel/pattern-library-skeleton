import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Label = ({ text, name }) => (
  <label className='Label' htmlFor={name}>
    {text}
  </label>
);

Label.displayName = 'Label';

Label.propTypes = {
  /** The label itself */
  text: PropTypes.string.isRequired,
  /** Used as for attribute. Must be the same as the form element id */
  name: PropTypes.string.isRequired,
};

export default Label;
