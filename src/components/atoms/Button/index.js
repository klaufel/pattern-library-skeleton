import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = styled.button`
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  font-size: ${props => props.theme.typography.body.normal.fontSize};
  line-height: ${props => props.theme.typography.body.normal.lineHeight};
  font-family: inherit;
  outline: none;
  border: 1px solid transparent;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.colors.primary.light};
  color: ${props => props.theme.colors.neutral.percent00};
  transition: color 0.2s, background-color 0.2s;

  &:hover,
  &:active {
    background-color: ${props => props.theme.colors.primary.light};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      background-color: ${props => props.theme.colors.primary.main};
    }
  }

  ${props =>
    props.secondary &&
    css`
      background-color: ${props.theme.colors.neutral.percent00};
      border-color: ${props.theme.colors.neutral.percent20};
      color: ${props.theme.colors.neutral.percent80};

      &:hover,
      &:active {
        background-color: ${props.theme.colors.neutral.percent05};
      }

      &:disabled {
        &:hover {
          background-color: ${props.theme.colors.neutral.percent00};
        }
      }
    `}
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
