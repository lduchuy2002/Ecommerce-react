import React from "react";
import "./Login.scss";

function Login() {
  return (
    <form className="login">
      <div className="login__account">
        <label htmlFor="account">Tài khoản</label>
        <input type="text" placeholder="Số điện thoại/tên tài khoản" name="account" />
      </div>
      <div className="login__password">
        <label htmlFor="password">Tài khoản</label>
        <input type="password" placeholder="Mật khẩu" name="password" />
      </div>
      <button className="login__submit" type="submit">
        Đăng nhập
      </button>
    </form>
  );
}

export default Login;
