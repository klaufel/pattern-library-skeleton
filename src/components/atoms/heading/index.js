import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export const HEADINGS_TYPES = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  span: 'span',
};

export const HEADINGS_SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

const Heading = ({ type, size, children, ...props }) => {
  const classname = `Heading Heading--${size}`;
  return React.createElement(type, { className: classname, ...props }, children);
};

Heading.displayName = 'Heading';

Heading.propTypes = {
  /** HTML tag to render */
  type: PropTypes.oneOf(Object.keys(HEADINGS_TYPES)),
  /** Size of heading */
  size: PropTypes.oneOf(Object.keys(HEADINGS_SIZES)),
  /** Content to be included in the heading */
  children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
  type: HEADINGS_TYPES.h1,
  size: HEADINGS_SIZES.md,
};

export default Heading;
