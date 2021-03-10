import UserApi from "../api/UserApi";

const AcceptLogin = async user => {
  const newValue = { ...user, isLogin: true };
  UserApi.updateUser(user.id, newValue);
};

export default AcceptLogin;
