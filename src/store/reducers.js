import * as actionType from "./actions";
const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.increment:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionType.decrement:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionType.reset:
      return {
        ...state,
        counter: 0,
      };
    default:
      return state;
  }
};
export default reducer;
