import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from '../../atoms/label';
import Input from '../../atoms/input';

const Wrapper = styled.div`
  padding-bottom: ${props => props.theme.spacing.md};
`;

const FormGroup = ({ id, label, placeholder, status, disabled, defaultValue }) => {
  return (
    <Wrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input
        id={id}
        defaultValue={defaultValue}
        status={status}
        placeholder={placeholder}
        disabled={disabled}
      />
    </Wrapper>
  );
};

FormGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  /** This Boolean attribute prevents the user from interacting with the button */
  disabled: PropTypes.bool,
};

export default FormGroup;
