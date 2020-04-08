import PropTypes from 'prop-types'
import styled from 'styled-components'

const Label = styled.label`
  display: block;
  font-size: ${props => props.theme.typography.body.normal.fontSize};
  line-height: ${props => props.theme.typography.body.normal.lineHeight};
  padding-bottom: ${props => props.theme.spacing.xxs};
`

Label.propTypes = {
  /** This Boolean attribute prevents the user from interacting with the button */
  disabled: PropTypes.bool
}

export default Label
