const imgIDReducer = (state = {}, action) => {
  switch (action.type) {
    case "SAVE_ID":
      const id = action.payload;
      return id;
    default:
      return state;
  }
};

export default imgIDReducer;
