import React from "react";
import styled from "styled-components";

const InputButton = styled.input`
  background-color: ${props => props.theme.mainBrand};
  font-size: 15px;
  border-radius: 20px;
  color: white;
  padding:10px 0;
  border:none;
  width: 100%;
  &:hover&:enabled{
    cursor:pointer;
    font-weight: bold;
  }
  &:disabled{
    opacity: 0.3;
}
`;

const SubmitButton = ({disabled}) => <InputButton type="submit" value="Send" disabled={disabled}/>;

export default SubmitButton;
