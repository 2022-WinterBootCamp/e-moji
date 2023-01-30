import jwtDecode from "jwt-decode";

// 해더에 사용할 닉네임을 위해 받아온 token 디코드
const decodeToken = (accessToken) => {
  if (process.env.REACT_APP_SECRET_KEY && process.env.REACT_APP_ALGORITHM) {
    const decoded = jwtDecode(accessToken); // Returns with the JwtPayload type

    return decoded;
  }
};

export { decodeToken };
