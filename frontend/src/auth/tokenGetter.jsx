import jwtDecode from "jwt-decode";

// 해더에 사용할 닉네임을 위해 받아온 token 디코드
const decodeToken = (accessToken) => {
  console.log("로그인 잘 들어왔나?", accessToken);

  if (process.env.REACT_APP_SECRET_KEY && process.env.REACT_APP_ALGORITHM) {
    const decoded = jwtDecode(accessToken); // Returns with the JwtPayload type

    console.log("로그인 라이브러리로?", decoded);

    return decoded;
  }
};

export { decodeToken };
