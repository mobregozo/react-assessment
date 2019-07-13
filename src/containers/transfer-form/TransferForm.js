import React from "react";
import InputForm from "../../components/input-form/InputForm";
import { connect } from "react-redux";
import { transferMoney } from "../../redux/actions";
import Loader from "../../components/loader/loader";
import SubmitButton from "../../components/submit-button/SubmitButton";
import Header from "../../components/header/Header";
import InputBox from "../../components/input-box/InputBox";
import FormBox from "../../components/form-box/FormBox";

class TransferForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      email: "",
      name: "",
      nameError: true,
      emailError: true,
      amountError: true,
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  errorMessage = "Please enter a valid ";

  handleChangeName(event) {
    if (event.target.value.length > 0 && event.target.value.length < 120){
      this.setState({ nameError :false});
    }
    else{
      this.setState({ nameError :true});
    }
    this.setState({ name: event.target.value });
  }

  handleChangeAmount(event) {
    const value = Number(event.target.value);
    if (value && value > 0){
      this.setState({amountError :false});
    }
    else{

      this.setState({amountError :true});
    }
    this.setState({ amount: value});
  }

  handleChangeEmail(event) {
    var re = /\S+@\S+\.\S+/;
    if (re.test(event.target.value)){
      this.setState({emailError : false});
    }
    else{
      this.setState({emailError :true});
    }
    this.setState({ email: event.target.value });
  }

  checkValidation() {
    const availablefunds = this.props.availablefunds >= this.state.amount;
    return availablefunds;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.checkValidation()){
      this.props.transferMoney({
        amount: this.state.amount,
        email: this.state.email,
        name: this.state.name
      });
      this.setState({
        amount: "",
        email: "",
        name: "",
        nameError: true,
        emailError: true,
        amountError: true,
      });
    }
    else{
      alert('You do not have enough fund to perform this action');
    }    
    
  }

  render() {
    const { loading } = this.props;
    return (
      <React.Fragment>
        <Header text="Send Money" />

        {loading ? (
          <Loader />
        ) : (
          <FormBox onSubmit={this.handleSubmit} noValidate>
            <InputBox>
              <InputForm
                label="Name"
                type="text"
                errorMessage={this.state.nameError? this.errorMessage+' name' : null}
                value={this.state.name}
                onChange={this.handleChangeName}
              />
              <InputForm
                label="Email Address"
                errorMessage={this.state.emailError? this.errorMessage+' email' : null } 
                type="email"
                value={this.state.email}
                onChange={this.handleChangeEmail}
              />
              <InputForm
                label="Amount"
                errorMessage={this.state.amountError? this.errorMessage+' amount' : null}
                type="number"
                value={this.state.amount}
                onChange={this.handleChangeAmount}
              />
            </InputBox>
            <SubmitButton disabled={this.state.nameError || this.state.emailError || this.state.amountError}/>
          </FormBox>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ transactions, account }) => {
  return {
    loading: transactions.loading,
    availablefunds: account.available
  };
};

export default connect(
  mapStateToProps,
  { transferMoney }
)(TransferForm);
