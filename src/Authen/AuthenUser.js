import AcceptLogin from "../helpers/AcceptLogin";
import UserApi from "../api/UserApi";
async function AuthenUser(account, password) {
  const user = await UserApi.findToken(account);
  if (user) {
    if (user.account === account && user.password === password) {
      localStorage.setItem("accessToken", user.id);
      AcceptLogin(user);
      return true;
    }
  } else {
    alert("Tài khoản không tồn tại hoặc sai thông tin");
  }
  return false;
}

export default AuthenUser;
