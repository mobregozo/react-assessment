import React from "react";
import TransferForm from "../containers/transfer-form/TransferForm";
import AccountDetails from "./../containers/account-details/AccountDetails";
import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  max-width: 1000px;
  min-width: 360px;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat( auto-fit, minmax(350px, 1fr) );
  justify-content: space-between;
  grid-column-gap: 30px;
  align-content: center;
`;

const BoxContainer = styled.div`
  height: 600px;
  display:flex;
  flex-direction:column;
  margin-bottom:30px;
`;

function Main() {
  return (
    <Container>
      <BoxContainer>
        <TransferForm />
      </BoxContainer>
      <BoxContainer>
        <AccountDetails />
      </BoxContainer>
    </Container>
  );
}

export default Main;
