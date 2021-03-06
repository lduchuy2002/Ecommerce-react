const Validate = {
  account: account => {
    const checkAccount = false;
    if (account !== "") {
      checkAccount = /^[a-zA-Z0-9]{6,18}$/g.test(account);
    }
    return checkAccount;
  },
  password: password => {
    const checkPassword = false;
    if (password !== "") {
      checkPassword = /^[a-zA-Z0-9!@#$%^&*]{6,18}$/g.test(password);
    }
    return checkPassword;
  },
  phoneNumber: phoneNumber => {
    const checkPhoneNumber = false;
    if (phoneNumber !== "") {
      checkPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(phoneNumber);
    }
    return checkPhoneNumber;
  },
};

export default Validate;
