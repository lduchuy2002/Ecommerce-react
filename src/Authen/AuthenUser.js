import AuthenToken from "./AuthenToken";
import AcceptLogin from "../helpers/AcceptLogin";

async function authenUser(account, password) {
  const response = await AuthenToken();
  if (response) {
    if (response.account === account && response.password === password) {
      AcceptLogin(account, password);
      return true;
    }
  }
  return false;
}

export default authenUser;
