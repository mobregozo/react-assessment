import React from "react";
import styled from "styled-components";


const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InputBox = ({children}) => <InputContainer>{children}</InputContainer>;

export default InputBox;
