import UserApi from "../api/UserApi";

const setToken = async (account, password) => {
  const token = await UserApi.findToken(account, password);
  localStorage.setItem("accessToken", token);
};

export default setToken;
