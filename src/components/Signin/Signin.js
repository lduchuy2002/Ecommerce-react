import React, { useState } from "react";
import "./Signin.scss";
import Validate from "../../helpers/Validate";

import UserApi from "../../api/UserApi";
import initAccount from "../../helpers/initUser";
function Signin() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSubmitSignin = async event => {
    event.preventDefault();
    if (
      Validate.account(account) &&
      Validate.password(password) &&
      Validate.phoneNumber(phoneNumber)
    ) {
      const createAccount = await UserApi.addUser(initAccount(account, phoneNumber, password));
      createAccount ? alert("Đăng ký thành công") : alert("Tài khoản này đã tồn tại");
    }
  };

  return (
    <div className="signin">
      <table className="signin__form">
        <tbody>
          <tr className="signin__form--row">
            <td>
              <label htmlFor="account">Tài khoản</label>
            </td>
            <td>
              <input
                type="text"
                placeholder="Tên tài khoản"
                name="account"
                autoComplete="off"
                onBlur={event => setAccount(event.target.value)}
              />
            </td>
          </tr>
          <tr className="signin__form--row">
            <td>
              <label htmlFor="password">Mật khẩu</label>
            </td>
            <td>
              <input
                type="password"
                placeholder="Mật khẩu"
                name="password"
                onBlur={event => setPassword(event.target.value)}
              />
            </td>
          </tr>
          <tr className="signin__form--row">
            <td>
              <label htmlFor="password">Số điện thoại</label>
            </td>
            <td>
              <input
                type="text"
                placeholder="Số điện thoại"
                name="password"
                onBlur={event => setPhoneNumber(event.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <button className="signin__submit" type="submit" onClick={handleSubmitSignin}>
        Đăng ký
      </button>
    </div>
  );
}

export default Signin;
