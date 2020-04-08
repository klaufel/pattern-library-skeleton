import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

const Input = styled.input`
  background-clip: padding-box;
  background-color: ${props => props.theme.colors.neutral.percent00};
  background-image: none;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.neutral.percent20};
  color: ${props => props.theme.colors.neutral.percent80};
  display: block;
  font-family: inherit;
  font-size: ${props => props.theme.typography.body.normal.fontSize};
  line-height: ${props => props.theme.typography.body.normal.lineHeight};
  font-weight: 400;
  height: 48px;
  outline: none;
  padding: ${props => props.theme.spacing.sm} ${props =>
  props.theme.spacing.sm};
  text-align: left;
  transition: border 0.3s, background-color 0.3s, color 0.3s, box-shadow 0.3s;
  width: 100%;

  &,
  &:hover,
  &:focus,
  &:active {
    appearance: none;
    box-shadow: none;
    outline: none;
  }

  &:hover {
    border-color: ${props => props.theme.colors.neutral.percent80};
  }

  &:focus {
    border-color: ${props => props.theme.colors.primary.light};
    box-shadow: 0 0 5px 0 ${props => props.theme.colors.primary.light};
  }

  &::placeholder {
    color: ${props => props.theme.colors.neutral.percent40};
    opacity: 1;
    transition: color 0.3s;
  }

  &:disabled,
  &[readonly] {
    background-image: none;
    background-color: ${props => props.theme.colors.neutral.percent05};
    border-color: ${props => props.theme.colors.neutral.percent20};
    cursor: not-allowed;
    opacity: 1;
    
    &,
    &::placeholder {
      color: ${props => props.theme.colors.neutral.percent40};
    }

    &,
    &:hover {
      border-color: ${props => props.theme.colors.neutral.percent20};
      box-shadow: none;
    }
  }

  &:focus {
    font-weight: 400;

    &::placeholder {
      opacity: 1;
    }
  }

  ${props =>
    (props.status === 'error' || props.status === 'success') &&
    css`
      background-position: top 12px right 12px;
      background-size: 24px 24px;
      background-repeat: no-repeat;

      ${props.small &&
      css`
        background-position: top 8px right 8px;
      `}
    `}

  ${props =>
    props.status === 'success' &&
    css`
      background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMxMDdCMDAiIGQ9Ik04LjggMTUuOWwtNC4yLTQuMi0xLjQgMS40IDUuNiA1LjYgMTItMTItMS40LTEuNC0xMC42IDEwLjZ6Ii8+PC9zdmc+');

      &,
      &:hover {
        border-color: ${props.theme.colors.alert.success};
      }
    `}
  
  ${props =>
    props.status === 'error' &&
    css`
      background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNBOTAwMTYiIGQ9Ik0yMSAyMmgtMThjLS4zIDAtLjctLjItLjktLjUtLjItLjMtLjItLjcgMC0xbDktMThjLjMtLjcgMS40LS43IDEuOCAwbDkgMThjLjIuMy4xLjcgMCAxLS4yLjMtLjYuNS0uOS41em0tMTYuNC0yaDE0LjhsLTcuNC0xNC44LTcuNCAxNC44ek0xMSAxMGgydjZoLTJ6Ii8+PGNpcmNsZSBmaWxsPSIjQTkwMDE2IiBjeD0iMTIiIGN5PSIxOCIgcj0iMS4zIi8+PC9zdmc+');

      &,
      &:hover {
        border-color: ${props.theme.colors.alert.error};
      }
    `}
`

Input.propTypes = {
  /** This Boolean attribute prevents the user from interacting with the button */
  disabled: PropTypes.bool
}

export default Input
