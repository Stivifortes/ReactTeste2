const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state >= 0 && state - 1;
      break;
    default:
      return state;
      break;
  }
};

export default counterReducer;
