import { TRANSFER_SUCCESS } from "../types";

const initialState = {
    spent:0,
    available: 4000,
}

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSFER_SUCCESS: {
      return { ...state, spent: action.payload.spent , available: action.payload.available}
    }
    default: {
      return state;
    }
  }
};

export default accountReducer;