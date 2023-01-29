import { getToken } from "./tokenManager";

// access_token의 만료일을 확인
const checkAccessToken = () => {
  const isToken = getToken();
  const access_token = getToken().access;
  const token_active = true;

  if (!isToken) {
    return false;
  }

  if (access_token) {
    console.log("있는거?");
    const token = JSON.parse(access_token);

    const nowTime = new Date().getTime();

    const tokenExpire = token.expiry;

    // 만료일이 지나면 로그아웃
    if (tokenExpire - nowTime <= 0) {
      localStorage.clear();
      alert("로그인이 필요합니다.");
      window.location.replace("/login");
      return;
    }

    return token_active;
  }
  return token_active;
};

export { checkAccessToken };
