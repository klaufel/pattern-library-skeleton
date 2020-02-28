import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  --Button-fontSize: 14px;
  --Button-color: #fff;
  --Button-backgroundColor: #2900d2;
  --Button-backgroundColor--hover: #250095;
  --Button-backgroundColor--active: #240080;
  --Button-borderRadius: 0;
  --Button-PaddingY: 8px;
  --Button-PaddingX: 16px;

  align-items: center;
  border: 0;
  border-radius: var(--Button-borderRadius);
  cursor: pointer;
  display: flex;
  font-size: var(--Button-fontSize);
  line-height: var(--lh-button);
  font-family: inherit;
  outline: none;
  padding: var(--Button-PaddingY) var(--Button-PaddingX);
  background-color: var(--Button-backgroundColor);
  color: var(--Button-color);
  transition: color 0.2s, background-color 0.2s;

  &:hover {
    background-color: var(--Button-backgroundColor--hover);
  }

  &:active {
    background-color: var(--Button-backgroundColor--active);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      background-color: var(--Button-backgroundColor);
    }
  }
`;

Button.displayName = 'Button';

Button.propTypes = {
  /** Content to be included in the button */
  children: PropTypes.node.isRequired,
  /** This Boolean attribute prevents the user from interacting with the button */
  disabled: PropTypes.bool,
  /** Click event */
  onClick: PropTypes.func,
};

export default Button;
