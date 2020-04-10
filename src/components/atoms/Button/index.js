import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.styles'

const Button = ({disabled, secondary, ghost, onClick, children}) => (
  <button
    css={styles}
    disabled={disabled}
    secondary={secondary}
    ghost={ghost}
    onClick={onClick && onClick()}
  >
    {children}
  </button>
)

Button.displayName = 'Button'

Button.propTypes = {
  /** Content to be included in the button */
  children: PropTypes.node.isRequired,
  /** This Boolean attribute prevents the user from interacting with the button */
  disabled: PropTypes.bool,
  /** This Boolean attribute to display secondary button variation */
  secondary: PropTypes.bool,
  /** This Boolean attribute to display ghost button variation */
  ghost: PropTypes.bool,
  /** Click event */
  onClick: PropTypes.func
}

export default Button
