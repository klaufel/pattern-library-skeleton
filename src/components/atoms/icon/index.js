import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const iconList = {
  chevronUp: <path d='M20.4 15.5L12 7.1l-8.4 8.4L5 16.9l7-7 7 7z' />,
  chevronRight: <path d='M8.5 20.4l8.4-8.4-8.4-8.4L7.1 5l7 7-7 7z' />,
  chevronDown: <path d='M20.4 8.5L12 16.9 3.6 8.5 5 7.1l7 7 7-7z' />,
  chevronLeft: <path d='M15.5 20.4L7.1 12l8.4-8.4L16.9 5l-7 7 7 7z' />,
};

export const ICON_NAMES = Object.keys(iconList);

export const ICON_SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
};

const Icon = ({ name, size }) => (
  <svg
    className={`Icon Icon--${size}`}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    enableBackground='new 0 0 24 24'
  >
    {iconList[name]}
  </svg>
);

Icon.displayName = 'Icon';

Icon.propTypes = {
  /** Name of icon, use of a list of names */
  name: PropTypes.oneOf(ICON_NAMES).isRequired,
  /** Size of icon */
  size: PropTypes.oneOf(Object.keys(ICON_SIZES)),
};

Icon.defaultProps = {
  size: ICON_SIZES.md,
};

export default Icon;
