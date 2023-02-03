import { getToken } from "./tokenManager";

// access_token의 만료일을 확인
const checkAccessToken = () => {
  const access_token = getToken();
  const token_active = true;

  if (access_token) {
    const token = JSON.parse(access_token);

    const nowTime = new Date().getTime();

    const tokenExpire = token.expiry;

    const timeLeft = tokenExpire - nowTime;

    console.log("남은시간", timeLeft);

    // 만료일이 지나면 로그아웃
    if (timeLeft <= 0) {
      localStorage.clear();
      alert("로그인이 필요합니다.");
      window.location.replace("/");
      return;
    }

    return token_active;
  }
  return token_active;
};

export { checkAccessToken };
