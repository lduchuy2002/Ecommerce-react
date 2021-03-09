import AuthenToken from "./AuthenToken";

async function authenUser(account, password) {
  const response = await AuthenToken();
  if (response) {
    if (response.account === account && response.password === password) {
      return true;
    }
  }
  return false;
}

export default authenUser;
