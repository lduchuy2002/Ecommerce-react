import UserApi from "../api/UserApi";
import getToken from "./getToken";

const AcceptLogin = async () => {
  const token = getToken();
  const response = await UserApi.get(token);
  const newValue = { ...response, isLogin: true };
  UserApi.turnOnLoginMode(token, newValue);
};

export default AcceptLogin;
