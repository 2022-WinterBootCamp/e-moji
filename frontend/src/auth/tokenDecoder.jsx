import { Dispatch } from "redux";
import jwtDecode from "jwt-decode";

export const fetchDecodeData = (accessToken) => (dispatch) => {
  if (accessToken) {
    console.log("잘 들어왔나? in DecodeActions", accessToken);
    const decoded = jwtDecode(accessToken); // Returns with the JwtPayload type
    console.log("라이브러리로?  in DecodeActions", decoded);

    const data = {
      id: decoded.id, //반환된 데이터의 Email 값 사용
      alias: decoded.alias,
    };

    dispatch({
      type: "DECODE_SUCCESS",
      payload: data,
    });
  } else {
    dispatch({
      type: "DECODE_FAIL",
    });
  }
};

//이걸 dispatch로 호출해서 토큰을 받아와야함
