import { TRANSFER_SUCCESS } from "../types";
import { TRANSFER_IN_PROGRESS } from "../types";

const initialState = {list: []};

const transferReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSFER_SUCCESS: {
      return {...state, list: [ ...state.list,  action.payload.transferInfo], loading: false};
    }
    case TRANSFER_IN_PROGRESS: {
      return { ...state, loading: true};
    }
    default: {
      return state;
    }
  }
};

export default transferReducer;
