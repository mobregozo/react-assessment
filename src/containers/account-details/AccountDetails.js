import React from "react";
import { connect } from "react-redux";
import TransactionList from "../../components/transaction-list/TransactionList";
import AccountBalance from "../../components/account-balance/AccountBalance";

class AccountDetails extends React.Component {

  render() {
    const { spent, available, transactions } = this.props;
    return (
      <React.Fragment> 
        <AccountBalance spent={ spent } available={ available } />
        <TransactionList transactions={transactions} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ account, transactions }) => {
  return {
    spent: account.spent,
    available: account.available,
    transactions: transactions.list
  };
};

export default connect(
  mapStateToProps,
  null
)(AccountDetails);
