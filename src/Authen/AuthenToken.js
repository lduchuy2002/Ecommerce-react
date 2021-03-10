import UserApi from "../api/UserApi";

const AuthenToken = async id => {
  const response = await UserApi.get(id);
  if (response) {
    if (response.isLogin) {
      return response;
    }
  } else return false;
};

export default AuthenToken;
