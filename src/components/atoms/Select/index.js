import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../Input';

const Select = styled(Input).attrs({
  as: 'select',
})`
  cursor: pointer;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFAgMAAAABCpX7AAAACVBMVEWZmZkzMzP///8phUeYAAAAHElEQVQIHWMQDXVgaA1VYFgYsoBhRdAChlVcCwA2FwYo7VMvrgAAAABJRU5ErkJggg==')
    no-repeat center right ${props => props.theme.spacing.sm};
 
  /* Unstyle the caret on 'select's in IE10+. */
  &::-ms-expand {
    background-color: transparent;
    border: 0;
  }
`;

Select.propTypes = {
  /** This Boolean attribute prevents the user from interacting with the button */
  disabled: PropTypes.bool,
};

export default Select;
