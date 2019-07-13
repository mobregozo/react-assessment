import * as actions from "./actions";
import * as types from "./types";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
  account: {
    spent: 0,
    available: 1000
  },
  transactions: {
    loading: false,
    transactionList: []
  }
};
describe("actions", () => {
  it("should reduce the available money from the sate after a Succeded transfer", () => {
    const transferInfo = {
      amount: 200,
      name: "John",
      email: "jogn@test.com"
    };

    const expectedAction = {
      type: types.TRANSFER_SUCCESS,
      payload: { transferInfo: transferInfo, ...{ available: 800, spent: 200 } }
    };

    expect(actions.transferSuccess(initialState, transferInfo)).toEqual(
      expectedAction
    );
  });

  it("should return the info of the transfer", () => {
    const transferInfo = {
      amount: 200,
      name: "John",
      email: "jogn@test.com"
    };

    const expectedAction = {
      type: types.TRANSFER_IN_PROGRESS,
      payload: { ...transferInfo }
    };

    expect(actions.transferRequested(transferInfo)).toEqual(expectedAction);
  });

  describe("async actions", () => {
    const transferInfo = {
      amount: 200,
      name: "John",
      email: "jogn@test.com"
    };

    it("should return the succeded action in case of a valid transaction", () => {
      const expectedActions = [
        { type: types.TRANSFER_SUCCESS, payload: {...transferInfo, id: 1 }},
        { type: types.TRANSFER_IN_PROGRESS, payload: transferInfo }
      ];
      const store = mockStore({ transactions: [] });

      store.dispatch(actions.transferMoney(transferInfo));

      //facke api response
      setTimeout(() => {
        expect(store.getActions()).toEqual(expectedActions)
      }, 2000)
      ;
    });
  });
});
