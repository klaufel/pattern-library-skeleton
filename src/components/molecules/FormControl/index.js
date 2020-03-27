import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';
import Textarea from '../../atoms/Textarea';
import Select from '../../atoms/Select';

const Wrapper = styled.div`
  padding-bottom: ${(props) => props.theme.spacing.md};
`;

const inputProps = (formType) => {
  const props = formType !== 'input' && { type: formType };
  if (formType === 'email') {
    const emailProps = {
      autoCorrect: 'off',
      autoCapitalize: 'none',
    };
    return { ...props, ...emailProps };
  }
  return props;
};

const InputField = (props) => {
  const { formType } = props;
  return formType === 'textarea' ? (
    <Textarea {...props} />
  ) : (
    <Input {...props} {...inputProps(formType)} />
  );
  /*switch (formType) {
    case 'textarea':
      return <Textarea {...props} />;
    default:
      return <Input {...props} {...inputProps(formType)} />;
  }*/
};

const FormControl = ({
  label,
  id,
  placeholder,
  status,
  disabled,
  defaultValue,
  formType,
  ...props
}) => {
  return (
    <Wrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputField
        id={id}
        placeholder={placeholder}
        status={status}
        disabled={disabled}
        defaultValue={defaultValue}
        formType={formType}
        {...props}
      />
    </Wrapper>
  );
};

FormControl.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  /** This Boolean attribute prevents the user from interacting with the button */
  disabled: PropTypes.bool,
  formType: PropTypes.oneOf(['', 'input', 'email', 'phone', 'number', 'password', 'textarea']),
};

export default FormControl;
