import React from "react";
import TransferForm from "./TransferForm";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";

// create any initial state needed
const initialState = {
  account: {
    spent: 0,
    available: 3000
  },
  transactions: {
    list: [],
    loading: false
  }
};
// here it is possible to pass in any middleware if needed into //configureStore
const mockStore = configureStore();
let store;

describe('TransferForm', ()=>{
  beforeEach(() => {
    //creates the store with any initial state or middleware needed
    store = mockStore(initialState);
  
  })

  test("Link changes the class when hovered", () => {
    const component = renderer.create(<TransferForm store={store}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    console.log({tree})
  })
})
