import ramdomID from "./randomID";

const initUser = (account, phoneNumber, password) => {
  return {
    id: `Q${ramdomID()}`,
    account,
    password,
    phoneNumber,
    cart: [],
    isLogin: false,
    initTime: new Date(),
  };
};

export default initUser;
