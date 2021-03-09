import UserApi from "../api/UserApi";
import getToken from "../helpers/getToken";
const authenToken = async () => {
  const accessToken = getToken();
  if (accessToken) {
    const response = await UserApi.get(accessToken);
    if (response.isLogin) {
      return response;
    }
  }
  return false;
};

export default authenToken;
