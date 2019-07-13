import { combineReducers } from "redux";
import transactions from "./transactions";
import account from "./account";

export default combineReducers({ transactions, account});