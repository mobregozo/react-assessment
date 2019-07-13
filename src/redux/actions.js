// import { TRANSFER_MONEY } from "./types";
import { TRANSFER_SUCCESS } from "./types";
import { TRANSFER_ERROR } from "./types";
import { TRANSFER_IN_PROGRESS } from "./types";

let nextId = 0;

export const transferSuccess = (state, content) => {
  const newAccountStatus = {
    transferInfo: content,
    spent: state.account.spent + Number(content.amount),
    available: state.account.available - Number(content.amount)
  };
  
  return {
    type: TRANSFER_SUCCESS,
    payload: newAccountStatus
  };
};

export const transferRequested = content => ({
  type: TRANSFER_IN_PROGRESS,
  payload: {
    ...content
  }
});

export const transferError = content => ({
  type: TRANSFER_ERROR,
  payload: {
    ...content
  }
});

export function transferMoney(transfer) {
  const transferData = {
    id: ++nextId,
    ...transfer
  };
  return function(dispatch, getState) {
    dispatch(transferRequested(transferData));

    //Simulates an API call
    setTimeout(() => {
      dispatch(transferSuccess(getState(), transferData));
    }, 2000);
  };
}
