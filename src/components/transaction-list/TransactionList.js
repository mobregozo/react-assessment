import React from "react";
import styled from "styled-components";
import Header from "./../header/Header";

const TransactionContainer = styled.div`
  border-bottom: solid 1px ${props => props.theme.borderColor};
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;  
`;

const TransactionsListContainer = styled.div`
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  min-height: 0;
  padding-right: 14px;
`;

const NameContainer = styled.div`
  font-size: 1.1rem;
  color: ${props => props.theme.greyBrand};
`;

const EmailContainer = styled.div`
  padding-top:5px;
  color: ${props => props.theme.greyBrand};;
  font-size: 0.8rem;
`;

const AmountContainer = styled.div`
  font-size: 1.3rem;
`;

const TransactionsBox = styled.div`
display: flex;
flex-direction: column;
overflow: hidden;

/* width */
&::-webkit-scrollbar {
  width: 10px;
}

/* Track */
&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
&::-webkit-scrollbar-thumb {
  background: black; 
  border-radius: 10px;
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}
`

const TransactionList = ({transactions}) => {
  return (
    <TransactionsBox>
      <Header text="Transactions" size='1.3rem'/>
      <TransactionsListContainer>
        {transactions.map(item => (
          <TransactionContainer key={item.id}>
            <div>
              <NameContainer> {item.name} </NameContainer>
              <EmailContainer> {item.email}</EmailContainer>
            </div>
            <AmountContainer>$ {item.amount}</AmountContainer>
          </TransactionContainer>
        ))}
      </TransactionsListContainer>
    </TransactionsBox>
  );
};

export default TransactionList;
