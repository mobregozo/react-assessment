import React from "react";
import Header from "./../header/Header";
import styled from "styled-components";

import PieChart from "react-minimal-pie-chart";

const AccountInfoContainer = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial;
  margin-bottom: 50px;
`;

const ChartLabel = styled.div`
  font-size: 1rem;
  text-align: ${props => props.align};
  
  label{
    font-size: 0.8rem;
  }
`;



const AccountBalance = ({spent, available}) => {
  return (
    <React.Fragment>
      <Header text="Send Money" />
      <AccountInfoContainer>
        <ChartLabel align='right'>
          <div>$ {spent}</div>
          <label>total sent</label>
        </ChartLabel>
        <PieChart
          data={[
            {
              value: spent,
              color: "#eaeaed"
            },
            {
              value: available,
              color: "#feb328"
            }
          ]}
          lineWidth={45}
          style={{ height: "55px", width: '95px' }}
        />
        <ChartLabel align='left'>
          <div>$ {available}</div>
          <label>left available</label>
        </ChartLabel>
      </AccountInfoContainer>
    </React.Fragment>
  );
};

export default AccountBalance;
