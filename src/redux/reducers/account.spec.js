import reducer from "./account";
import * as types from "./../types";

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
        spent: 0,
        available: 4000
      });
  });

  it("should handle ADD_TODO", () => {
      const expected = {spent: 200, available: 2000};
    expect(
      reducer([], {
        type: types.TRANSFER_SUCCESS,
        payload: {spent: 200, available: 2000}
      })
    ).toEqual({...expected});

    
  });
});
