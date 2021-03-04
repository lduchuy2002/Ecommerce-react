import React from "react";
import "./Login.scss";

function Login() {
  return (
    <form className="login">
      <table className="login__form">
        <tr className="login__form--row">
          <td>
            <label htmlFor="account">Tài khoản</label>
          </td>
          <td>
            <input type="text" placeholder="Tên tài khoản" name="account" autoComplete="off" />
          </td>
        </tr>
        <tr className="login__form--row">
          <td>
            <label htmlFor="password">Mật khẩu</label>
          </td>
          <td>
            <input type="password" placeholder="Mật khẩu" name="password" />
          </td>
        </tr>
      </table>

      <button className="login__submit" type="submit">
        Đăng nhập
      </button>
    </form>
  );
}

export default Login;
