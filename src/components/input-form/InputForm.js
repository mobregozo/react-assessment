import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  margin-bottom:30px;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  width: 100%;
  margin-bottom:10px;
`;

const Input = styled.input`
  border-style:solid;
  border-color: ${props =>  (props.error? props.theme.errorColor : props.theme.borderColor )};
  border-width: 0 0 1px 0;
  display: block;
  padding: 5px 0;
  width: 100%;
  font-size: 1.2rem;
`;

const Error = styled.div`
  padding-top:7px;
  color: red;
`;

const InputForm = ({ value, type, label, onChange, errorMessage }) => (
  <FormContainer>
    <Label>{label}</Label>
    <Input error={errorMessage} value={value} type={type} onChange={onChange} />
    {errorMessage ? <Error>{errorMessage}</Error> : null}
  </FormContainer>
);

export default InputForm;
