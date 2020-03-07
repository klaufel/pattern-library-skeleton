import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../Input';

const Textarea = styled(Input).attrs({
  as: 'textarea',
})`
  height: auto;
  min-height: 116px;
  resize: vertical;
`;

Textarea.propTypes = {
  /** This Boolean attribute prevents the user from interacting with the button */
  disabled: PropTypes.bool,
};

export default Textarea;
