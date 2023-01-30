// 받아온 토큰을 만료일을 설정해 로컬 스토리지에 저장
const setAccessToken = (accessToken, changeToken) => {
  if ((changeToken = true)) {
    localStorage.removeItem("access_token");
  }
  const today = new Date();
  const accessExpires = new Date().setTime(today.getTime() + 1000 * 60 * 30); // 만료 30분

  const accessStorage = {
    value: accessToken,
    expiry: accessExpires,
  };
  localStorage.setItem("access_token", JSON.stringify(accessStorage));
};

// 로컬 스토리지에 있는 토큰을 확인
const getToken = () => {
  const access = localStorage.getItem("access_token");
  console.log("access", access);
  if (access) {
    return access;
  } else return false;
};

const getAccess = () => {
  const stringAccess = getToken();
  if (stringAccess !== null) {
    const access = JSON.parse(stringAccess);
    return access;
  } else if (stringAccess === undefined) {
    console.log("알 수 없는 오류");
    return;
  } else return;
};

// 로컬 스토리지에 있는 토큰을 clear
const deleteToken = (clearToken) => {
  localStorage.clear(clearToken);
  window.location.replace("/");
};

export { setAccessToken, getToken, getAccess, deleteToken };
