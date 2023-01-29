const decodeState = {
  success: false,
};

//여기서 state의 초기값은 success = false밖에없네? 뭐야 이걸 닉네임으로 해야하는거 아닌가 ?
const DecodeReducer = (
  state = decodeState, //일단 decodeinfo(name,alias는 넣지않고 success가 fail인지 true인지 확인)
  action
) => {
  switch (action.type) {
    case "DECODE_FAIL":
      return {
        ...state,
        success: false,
      };
    case "DECODE_SUCCESS":
      console.log({ ...state }, "decode확인 절차 in reducer");
      console.log(action.payload, "payload  in reducer");
      const { id, alias } = action.payload;
      console.log(id, alias);
      return {
        ...state,
        success: true,
        decodeInfo: {
          id,
          alias,
        },
      };

    default:
      return state;
  }
};

export default DecodeReducer;
