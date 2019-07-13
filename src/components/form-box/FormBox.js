import React from "react";
import styled from "styled-components";

const Formcontainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const FormBox = ({onSubmit, children}) => <Formcontainer onSubmit={onSubmit}>{children}</Formcontainer>;

export default FormBox;
