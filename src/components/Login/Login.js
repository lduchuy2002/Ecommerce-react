import React, { useState } from "react";

import "./Login.scss";

import Validate from "../../helpers/Validate";
import AuthenUser from "../../Authen/AuthenUser";

function Login({ setLogin }) {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmitLogin = async event => {
    event.preventDefault();
    if (Validate.account(account) && Validate.password(password)) {
      const checkLogin = await AuthenUser(account, password);
      if (checkLogin) {
        setLogin(true);
      }
    }
  };

  return (
    <div className="login">
      <table className="login__form">
        <tbody>
          <tr className="login__form--row">
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
          <tr className="login__form--row">
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
        </tbody>
      </table>

      <button className="login__submit" type="submit" onClick={handleSubmitLogin}>
        Đăng nhập
      </button>
    </div>
  );
}

export default Login;
