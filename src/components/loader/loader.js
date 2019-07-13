import React from "react";
import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  margin-top: 50px;
`;

const Spinner = styled.div`
  border: 10px solid lightgrey;
  border-top: 10px solid ${props => props.theme.mainBrand};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${rotateAnimation} 1s linear infinite;
  margin: 0 auto;
`;

const Loader = () => (
  <SpinnerContainer>
    <Spinner />
  </SpinnerContainer>
);

export default Loader;
