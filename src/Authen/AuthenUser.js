import UserApi from "../api/UserApi";

const authenUser = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    const response = await UserApi.get(accessToken);
    if (response.isLogin) {
      return true;
    }
  }
  return false;
};

export default authenUser;
