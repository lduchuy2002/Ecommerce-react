import UserApi from "../api/UserApi";

const AcceptLogin = async user => {
  const newValue = { ...user, isLogin: true };
  UserApi.turnOnLoginMode(user.id, newValue);
};

export default AcceptLogin;
